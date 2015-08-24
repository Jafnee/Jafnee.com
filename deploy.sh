#!/usr/bin/env bash
# Set env JAFNEESITEDIR
SRC=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

git -C $SRC pull origin master
rsync -vd $SRC/*.html $JAFNEESITEDIR
rsync -vd $SRC/css/*.css $JAFNEESITEDIR/css/
rsync -vd $SRC/js/*.js $JAFNEESITEDIR/js/