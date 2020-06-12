## 超級挑戰題

#!/bin/bash
# github.sh username <= 帶入想查詢的 github 帳號

echo curl -X GET https://api.github.com/users/aszx87410



data=`curl -X GET https://api.github.com/users/aszx87410 | jq '.'`
echo $data | jq '.name'
echo $data | jq '.bio'
echo $data | jq '.location'
echo $data | jq '.blog'





