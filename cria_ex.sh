NUMERO=$1
EXTENSAO=$2
START=1

for (( i=$START; i<=$NUMERO; i++ ));
do
	touch ex$i.$EXTENSAO
done
