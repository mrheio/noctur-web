<script>
    export let type = 'submit';
</script>

<button
    class="h-12 w-full border-2 border-accent-400 rounded-md bg-accent-main text-primary-900 font-semibold hover:bg-accent-300 transition-all duration-300 ease-in-out;"
    {type}
    on:click><slot /></button
>
