export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris ac nisl convallis sollicitudin. Sed ultricies eu lacus non pretium. Aenean accumsan, orci at mattis laoreet, ante lorem condimentum enim, sed bibendum velit sapien non dui. Donec vehicula eget leo id auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna et ex luctus viverra in sit amet purus. Curabitur quis ultricies nisi, ut viverra neque. Fusce nec dignissim metus. In venenatis quis urna ut laoreet. Curabitur a metus pulvinar, ornare nisi ut, maximus est. Praesent aliquam tellus non placerat lobortis. Fusce metus arcu, aliquam vel dui sed, sagittis molestie odio.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Nullam non urna et ex luctus viverra in sit amet purus. Curabitur quis ultricies nisi, ut viverra neque. Fusce nec dignissim metus. In venenatis quis urna ut laoreet. Curabitur a metus pulvinar, ornare nisi ut, maximus est. Praesent aliquam tellus non placerat lobortis. Fusce metus arcu, aliquam vel dui sed, sagittis molestie odio.',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris ac nisl convallis sollicitudin. Sed ultricies eu lacus non pretium. Aenean accumsan, orci at mattis laoreet, ante lorem condimentum enim, sed bibendum velit sapien non dui. Donec vehicula eget leo id auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
            picture: null,
        },
    ],
})