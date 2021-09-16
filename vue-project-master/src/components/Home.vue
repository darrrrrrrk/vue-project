<template>
    <div class="jumbotron">
        <h1>任务追踪</h1>
        {{ $route.params.id }}
        <p>
            <strong>
                
                <router-link to="/home/homechild">创建一个任务</router-link>
            </strong>
        </p>
        <router-view></router-view>
    </div>
    
</template>