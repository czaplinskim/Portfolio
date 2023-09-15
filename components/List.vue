<template>
    <div class="list-container">

        <h3 class="list__header">
            {{  list.listName }}
        </h3>

        <ul v-if="list.listType==='Regular'" class="list">
            <li class="list__item list__item--small" v-for="(item, i) in list.items" :key="i">
               <a class="list__link" href="item.linkUrl" target="_blank">
                {{  item.name  }}
            </a>
            </li>
        </ul>

        <ul v-if="list.listType==='Horizontal'" class="list list-horizontal">
            <li class="list__item list__item--small list-horizontal__item " v-for="(item, i) in list.items" :key="i">
                {{  item.name  }}
            </li>
        </ul>

        <dl v-if="list.listType==='Description'" class="list">
            <template v-for="(item, i) in list.items" :key="i">
                <dt class="list__item list__item--big">
                    {{  item.name  }}
                </dt>
                <dd class="list__item-description"> 
                    {{  item.description  }}
                </dd>
            </template>
         </dl>



    </div>
</template>

<script setup>

const props = defineProps({list: Object})
</script>

<style lang="scss" scoped>

.list-container {
    margin: 150px 0;
}

.list-horizontal {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &__item {
        padding: 20px 60px !important;
        flex-grow: 1;
        text-align: center;
    }
}

.list {



    &__header {
        font-size: 1.4rem;
        font-weight: 500;
        margin: 0 0 20px;
    }

    &__link {
        color: black;
        text-decoration: none;
    }

    &__item-description {
        margin: 0;
        font-size: 0.6rem;
        margin-bottom: 20px;
    }

    &__item {

        border-top: 2px solid black;
        padding: 20px 0;
        margin: 0;
        

        &--small {
            font-size: 0.6rem;
        }

        &--big {
            font-size: 0.7rem;
            padding: 20px 0 10px;
        }
    }
}


.list, .list ul li {
   margin:0;
   padding: 0;
   text-indent: 0;
   list-style-type: none;
}

</style>