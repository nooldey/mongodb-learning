#!/bin/sh
#!/bin/bash

read -s -p "
Choose your operation: 
    1. start DB 
    2. stop DB
" flag

#开启MongoDB
start() {
    echo 'robot going to start DB...'
    sleep 0.3
    net start MongoDB
    sleep 0.1
    echo 'MongoDB is running now!'
}

#关闭MongoDB
stop() {
    echo 'robot will stop DB...'
    sleep 0.3
    net stop MongoDB
    sleep 0.1
    echo 'MongoDB is stop now!'
}

#处理用户输入
catdb(){
    case $1 in
        1)
        start;;
        2)
        stop;;
        *)
        echo 'Error input'
    esac
}

catdb $flag

sleep 3