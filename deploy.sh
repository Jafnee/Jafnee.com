#!/usr/bin/env bash
# Set env var $JAFNEESITEDIR
DIST=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/dist/

if [[ $JAFNEESITEDIR ]]
then
    rsync -va $DIST $JAFNEESITEDIR
else
    echo '$JAFNEESITEDIR is not set.'
    exit 1
fi

