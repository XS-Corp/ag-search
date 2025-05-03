// Создаём отдельный файл для базы данных переводов
const translationDatabase = {
  en: {
    'Привет': 'Hello',
    'Как дела?': 'How are you?',
    'Спасибо': 'Thank you',
    'До свидания': 'Goodbye',
    'Я люблю программировать': 'I love programming',
    'Мир': 'World',
    'Это тест': 'This is a test',
    // ...добавьте тысячи строк переводов здесь...
  },
  ru: {
    'Hello': 'Привет',
    'How are you?': 'Как дела?',
    'Thank you': 'Спасибо',
    'Goodbye': 'До свидания',
    'I love programming': 'Я люблю программировать',
    'World': 'Мир',
    'This is a test': 'Это тест',
    // ...добавьте тысячи строк переводов здесь...
  }
};

export default translationDatabase;
