const express = require('express');
const router = express.Router();
const { authenticationCheckRedirect } = require('./middleware');

router.get(
    '/',
    authenticationCheckRedirect('/users/login', true),
    async (req, res) => {
        res.render('dashboard/dashboard', {
            title: 'Dashboard',
            toDoCards: [
                {
                    title:
                        'to do card one longer name two lines and now lets make it 3 lines',
                    tags: ['tag 1'],
                },
                {
                    title: 'to do cardTwo',
                    tags: ['tag 1', 'tag 2'],
                },
                {
                    title: 'to do cardThree',
                    tags: ['tag 1', 'tag 2', 'tag 3'],
                },
            ],
            inProgressCards: [
                {
                    title: 'in progress card one',
                    tags: ['tag 1'],
                },
                {
                    title: 'in progress cardTwo',
                    tags: ['tag 1', 'tag 2'],
                },
            ],
            doneCards: [
                {
                    title: 'done card one',
                    tags: [
                        'tag 1',
                        'tag 2',
                        'tag 3',
                        'tag 5',
                        'tag 6',
                        'tag 7',
                        'tag 8',
                        'tag 1',
                        'tag 2',
                        'tag 3',
                        'tag 5',
                        'tag 6',
                        'tag 7',
                        'tag 8',
                        'tag 1',
                        'tag 2',
                        'tag 3',
                        'tag 5',
                        'tag 6',
                        'tag 7',
                        'tag 8',
                    ],
                },
                {
                    title: 'done cardTwo',
                    tags: ['tag 1', 'tag 2'],
                },
                {
                    title: 'done cardThree',
                    tags: ['tag 1', 'tag 2', 'tag 3'],
                },
                {
                    title: 'done cardFour',
                    tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4'],
                },
                {
                    title: 'done cardFive',
                    tags: [
                        'tag 1',
                        'tag 2',
                        'tag 3',
                        'tag 5',
                        'tag 6',
                        'tag 7',
                        'tag 8',
                    ],
                },
            ],
        });
    }
);

module.exports = router;
