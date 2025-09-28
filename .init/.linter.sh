#!/bin/bash
cd /home/kavia/workspace/code-generation/construction-management-suite-144903-144912/simple_construction_workship_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

