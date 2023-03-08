<template>
    <!-- 需要内嵌的页面都放在这里 -->
    <el-container>
        <el-aside style="width:inherit;">
            <el-menu :collapse="isCollapse" router style="height: 100vh;background-color:blanchedalmond;">
                <TreeMenu :obj="item" :key="item.Index" v-for="item in list"></TreeMenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>
                <IconCom icon="expand"></IconCom>
            </el-header>
            <el-main> <router-view></router-view></el-main>
        </el-container>
    </el-container>
</template>
<script setup lang="ts">
import TreeMenu from '../../components/TreeMenu.vue'
import TreeModel from '../../class/TreeModel'
import { ref } from 'vue';
import IconCom from '../../components/IconCom.vue';
const list: Array<TreeModel> = [
    {
        Index: "/menu",
        Name: "菜单管理",
        Children: [
            {
                Index: "/test1",
                Name: "test1",
                Children: []
            }
            , {
                Index: "/test2",
                Name: "test2",
                Children: [
                    {
                        Index: "/test2-1",
                        Name: "test2-1",
                        Children: []
                    }
                    , {
                        Index: "/test2-2",
                        Name: "test2-2",
                        Children: []
                    }
                ]
            }
        ]
    },
    {
        Index: "/role",
        Name: "角色管理",
        Children: []
    }
    , {
        Index: "/user",
        Name: "用户管理",
        Children: []
    }
]
const isCollapse = ref(true)
</script>