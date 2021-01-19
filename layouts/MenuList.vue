<template>
  <div class="menu-list" v-show="menu">
    <div>
      <div class="menu-list-content">
        <button class="menu-list-content-item w-100" :class="{'menu-list-content-item-sel':(sel===index?true:false)}" v-for="(item,index) in items" :key="index" @click="sel = index">
          <div class="menu-list-content-item-icon" :style="{'background-image': 'url('+item.icon+')'}"></div><div>{{item.title}}</div>
        </button>
      </div>
      <div>
        <div class="menu-list-right-title">{{items[sel].title}}</div>
        <div class="menu-list-right-all">
          <div class="menu-list-right-item" v-for="(item,index) in items[sel].submenu" :key="index">
            <div class="menu-list-right-item-title">{{item.title}}</div>
            <div class="menu-list-right-item-all">
              <div class="menu-list-right-item-self" v-for="(submenu,id) in item.list" :key="id">{{submenu.title}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['menu'],
  data() {
    return {
      sel: 0,
      items: [
        {
          id: 0,
          icon: 'img/export.png',
          title: 'Здоровье',
          submenu: [
            {
              title: 'Смартфоны',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Наушники и гарнитуры',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Акксессуары',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Смарт-часы и браслеты',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Акксессуары',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            }
          ]
        },
        {
          id: 1,
          icon: 'img/smartphone.png',
          title: 'Смартфоны и гаджеты',
          submenu: [
            {
              title: 'Смартфоны',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Наушники и гарнитуры',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Акксессуары',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Смарт-часы и браслеты',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Акксессуары',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            }
          ]
        },
        {
          id: 2,
          icon: 'img/laptop-computer.png',
          title: 'Ноутбуки и компьютеры',
          submenu: [
            {
              title: 'Смартфоны',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Наушники и гарнитуры',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Акксессуары',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Смарт-часы и браслеты',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Акксессуары',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            }
          ]
        },
        {
          id: 3,
          icon: 'img/game.png',
          title: 'Игры',
          submenu: [
            {
              title: 'Смартфоны',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Наушники и гарнитуры',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Акксессуары',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Смарт-часы и браслеты',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Акксессуары',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            }
          ]
        },
        {
          id: 4,
          icon: 'img/relax.png',
          title: 'Все для дома',
          submenu: [
            {
              title: 'Смартфоны',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Наушники и гарнитуры',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Акксессуары',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Смарт-часы и браслеты',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Акксессуары',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            }
          ]
        },
        {
          id: 5,
          icon: 'img/bread.png',
          title: 'Продукты',
          submenu: [
            {
              title: 'Смартфоны',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Наушники и гарнитуры',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Акксессуары',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Смарт-часы и браслеты',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Акксессуары',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            }
          ]
        },
        {
          id: 6,
          icon: 'img/open-book.png',
          title: 'Книги',
          submenu: [
            {
              title: 'Смартфоны',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Наушники и гарнитуры',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Акксессуары',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Смарт-часы и браслеты',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Акксессуары',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            }
          ]
        },
        {
          id: 7,
          icon: 'img/gym.png',
          title: 'Спорт и хобби',
          submenu: [
            {
              title: 'Смартфоны',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Наушники и гарнитуры',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Акксессуары',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Смарт-часы и браслеты',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Акксессуары',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            }
          ]
        },
        {
          id: 8,
          icon: 'img/pacifier.png',
          title: 'Детям',
          submenu: [
            {
              title: 'Смартфоны',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Наушники и гарнитуры',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Акксессуары',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Смарт-часы и браслеты',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Акксессуары',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            }
          ]
        },
        {
          id: 9,
          icon: 'img/makeup.png',
          title: 'Красота',
          submenu: [
            {
              title: 'Смартфоны',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Наушники и гарнитуры',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Акксессуары',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Смарт-часы и браслеты',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            },
            {
              title: 'Акксессуары',
              list: [
                {
                  title: 'Android',
                },
                {
                  title: 'iPhone',
                },
                {
                  title: 'Беспроводная зарядка',
                },
                {
                  title: '120 Гц Экран',
                },
                {
                  title: 'Snapdragon 855+',
                }
              ]
            }
          ]
        },
      ]
    }
  }
}
</script>
<style>
@import 'assets/menuList.css';
</style>

