#!/bin/bash
set -e

rm -rf tmp/pids/server.pid
rails server -p 3001 -b '0.0.0.0'

# Keep the container running
tail -f /dev/null
