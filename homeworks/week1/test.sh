## 挑戰題

#!/bin/bash

echo  "請問你要幾個檔案:"
read MA

INDEX=1
# 當條件成立，就會不斷執行（le表示小於或等於）
while [ $INDEX -le $MA ]
do
        # 輸出 INDEX.js
        echo  " $INDEX .js "
        # INDEX 的值會加1
        (( INDEX++ ))
done
echo ""

echo "已經給你 $MA 個檔案囉！!"
