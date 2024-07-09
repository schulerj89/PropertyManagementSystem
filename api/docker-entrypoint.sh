#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Run Composer install
composer install --prefer-dist --no-progress --no-suggest

# Run database migrations
php artisan migrate

# Start the Laravel development server
php artisan serve --host=0.0.0.0 --port=8000

# Run the original CMD
exec "$@"
