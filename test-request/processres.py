import cv2
import sys
import os
import argparse
from multiprocessing import Process

def main(args):
    _resize_job = []
    all_image = os.listdir(args.input_dir)
    count = 0
    if not os.path.exists(args.output_dir):
        os.makedirs(args.output_dir)
    for file in all_image:
        extension = os.path.splitext(file)[1]
        if (extension == '.jpg' or extension == '.png'):
            # Push to a new process because a thread has GIL
            _process = Process(target=resize_image, args=(file, args,))
            _process.start()
            _resize_job.append(_process)
            # resize_image(file, args)
        if (len(_resize_job) == args.limit):
            for t in _resize_job:
                t.join()
            _resize_job = []
            count += args.limit
            print('finished:', round(count / len(all_image) * 100, 2), '%\t', end='\r')
    # Finish any remaining job
    for t in _resize_job:
        t.join()
        count += 1
    print('finished all', count, 'images')

def resize_image(file, args):
    try:
        load_name = os.path.join(args.input_dir,file)
        # print('read', load_name)
        frame = cv2.imread(load_name)
        resized_height = round(frame.shape[0] * args.percent / 100)
        resized_width = round(frame.shape[1] * args.percent / 100)
        save_name = os.path.join(args.output_dir,file)
        scaled = cv2.resize(frame, (resized_width, resized_height),interpolation=cv2.INTER_AREA)
        cv2.imwrite(save_name, scaled)
        # print('saved', save_name, 'at', resized_width, 'x', resized_height)
    except Exception as e:
        print(e, 'at', file)

def parse_arguments(argv):
    # Include arguments in command line
    parser = argparse.ArgumentParser()
    
    parser.add_argument('input_dir', type=str, help='Directory with images')
    parser.add_argument('output_dir', type=str, help='Directory with resized images')
    parser.add_argument('--percent', type=int, help='Image reduction percentage', default=50)
    parser.add_argument('--limit', type=int, help='Number of processes open at the same time', default=5)
    return parser.parse_args(argv)

if __name__ == '__main__':
    main(parse_arguments(sys.argv[1:]))