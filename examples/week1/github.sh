#!/bin/sh

# 附註：
# 底下寫法其實滿差的，因為一旦原始的資料變了或是欄位的順序錯了就會掛掉
# 但一時找不太到支援度高的寫法怎麼寫，所以只能先求有再來求好QQ

username=$1;

data=$(curl --silent https://api.github.com/users/$username);
echo $data | grep -o '"name": ".*", "company' | sed 's/"name": "//g' | sed 's/", "company//g';
echo $data | grep -o '"bio": ".*", "twitter_username' | sed 's/"bio": "//g' | sed 's/", "twitter_username//g';
echo $data | grep -o '"location": ".*", "email' | sed 's/"location": "//g' | sed 's/", "email//g';
echo $data | grep -o '"blog": ".*", "location' | sed 's/"blog": "//g' | sed 's/", "location//g';
