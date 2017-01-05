#! /usr/bin/sh

dropdb bwbonanno
heroku pg:pull DATABASE_URL bwbonanno --app tempfession
