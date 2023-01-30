FROM python:3.8-slim
ENV TZ=Asia/Shanghai
WORKDIR /main/py
COPY main.py .
COPY list.txt .
RUN pip install -r list.txt
CMD ["python","main.py"]