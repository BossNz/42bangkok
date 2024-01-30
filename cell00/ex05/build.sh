if [ $# == 0 ]
then
    echo "No arguments supplied"
fi
for arg in "$@"; do
    touch "ex$arg"
done