if [ $# == 0 ]
then
    echo "Pls enter args"
fi

for ((i=1; i<=3 && i<=$#; i++)); do
    echo ${!i}
done