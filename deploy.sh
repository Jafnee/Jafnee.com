#!/usr/bin/env bash
# Set env var $JAFNEESITEDIR
DIST=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/dist/

rsync -va $DIST $JAFNEESITEDIR
