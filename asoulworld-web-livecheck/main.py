import time
import requests
from apscheduler.schedulers.blocking import BlockingScheduler
import pymysql
import os

target = [22625025, 22632424, 22634198, 22637261, 22625027, 22632157]
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                  'Chrome/94.0.4606.71 Safari/537.36 Edg/94.0.992.38',
}

# SQL_USER = "root"
# SQL_PASS = ""
# SQL_HOST = "localhost"

SQL_USER = "xxxxxxxxxxxx"
SQL_PASS = "xxxxxxxxxxx"
SQL_HOST = "xxxxxxxxxx"

db = pymysql.connect(host=SQL_HOST,
                     user=SQL_USER,
                     password=SQL_PASS,
                     database='asoulworld_db')
cursor = db.cursor()


def live_status_request():
    for i, uid in enumerate(target):
        res = requests.get(url='http://api.live.bilibili.com/room/v1/Room/room_init', params={'id': uid},
                           headers=headers)
        json_result = res.json()
        if json_result['code'] == 0:
            cursor.execute("update member_table set is_living={} where member_id={}".format(json_result['data']['live_status'],i+1))
            db.commit()
            # print("set live_" + str(i) + " to " + str(json_result['data']['liveStatus']))
        else:
            print(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()) + " request failed.")
            return 0
        time.sleep(1)
    os.system('cls')
    print(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()) + " request success.")


sched = BlockingScheduler()
sched.add_job(live_status_request, 'interval', minutes=3)
sched.start()
