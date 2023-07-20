#!/bin/bash

# Собираем приложение
npm run build

# Переходим в директорию сборки
cd build

# Инициализируем репозиторий Git
git init

# Добавляем все файлы
git add .

# Создаем коммит
git commit -m "Auto-deploy"

# Добавляем удаленный репозиторий GitHub (замените <username> и <repository> на свои значения)
git remote add origin https://github.com/eternalvision/LV-Accounting-Landing.git

# Отправляем изменения в ветку "build"
git push -f origin HEAD:build

# Устанавливаем пакет gh-pages
npm install --save-dev gh-pages

# Публикуем ветку "build" на GitHub Pages
npx gh-pages -d ../build -b build
