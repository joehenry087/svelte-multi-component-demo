import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

export default [
    {
        input: [
            "source/SiteNav.svelte",
            "source/Footer.svelte"
        ],
        output: {
            dir: 'out',
            format: 'iife'
        },
        plugins: [
            resolve(),
            svelte()
        ]
    },
];
