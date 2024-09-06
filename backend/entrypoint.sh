echo "Waiting for database to be available..."
until nc -zv db 3306; do
  echo "Waiting for database connection..."
  sleep 1
done

echo "Starting the application..."
exec yarn start