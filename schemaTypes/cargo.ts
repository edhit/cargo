export default {
    name: 'cargo', // Уникальное имя схемы
    title: 'Cargo', // Отображаемое название
    type: 'document', // Тип контента (документ)
    fields: [
      {
        name: 'cargoType',
        title: 'Тип груза',
        type: 'string', // Тип данных
      },
      {
        name: 'weight',
        title: 'Общий вес (кг)',
        type: 'number',
      },
      {
        name: 'pricePerKg',
        title: 'Цена за кг',
        type: 'number',
      },
      {
        name: 'departureCity',
        title: 'Город отправления',
        type: 'string',
      },
      {
        name: 'destinationCity',
        title: 'Город назначения',
        type: 'string',
      },
      {
        name: 'details',
        title: 'Дополнительные детали',
        type: 'text',
      },
      {
        name: 'username',
        title: 'Имя пользователя телеграм',
        type: 'string',
      },
    ],
  };
  