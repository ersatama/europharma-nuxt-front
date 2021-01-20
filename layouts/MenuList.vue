<template>
  <div class="menu-list" v-show="menu">
    <div>
      <div class="menu-list-content">
        <button class="menu-list-content-item w-100" :class="{'menu-list-content-item-sel':(sel===index?true:false)}" v-for="(item,index) in items" :key="index" @click="sel = index">
          <div class="menu-list-content-item-icon" :style="{'background-image': 'url('+item.icon+')'}"></div><div>{{item.title}}</div>
        </button>
      </div>
      <div>
        <NuxtLink :to="'/catalog/'+items[sel].url">
          <div class="menu-list-right-title">{{items[sel].title}}</div>
        </NuxtLink>
        <div class="menu-list-right-all">
          <div class="menu-list-right-item" v-for="(item,index) in items[sel].submenu" :key="index">
            <NuxtLink :to="'/catalog/'+items[sel].url+'/'+item.url">
              <div class="menu-list-right-item-title">{{item.title}}</div>
            </NuxtLink>
            <div class="menu-list-right-item-all">
              <NuxtLink :to="'/catalog/'+items[sel].url+'/'+item.url+'/'+submenu.url" v-for="(submenu,id) in item.list" :key="id">
                <div class="menu-list-right-item-self">{{submenu.title}}</div>
              </NuxtLink>
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
          icon: '../img/export.png',
          title: 'Здоровье',
          url: 'health',
          submenu: [
            {
              title: 'Смартфоны',
              url: 'smartphones',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Наушники и гарнитуры',
              url: 'headphones_and_headsets',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Аксессуары',
              url: 'accessories',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Смарт-часы и браслеты',
              url: 'smart_watches_and_bracelets',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Акксессуары',
              url: 'accessories',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            }
          ]
        },
        {
          id: 1,
          icon: '../img/smartphone.png',
          title: 'Смартфоны и гаджеты',
          url: 'smartphones_gadgets',
          submenu: [
            {
              title: 'Смартфоны',
              url: 'smartphones',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Наушники и гарнитуры',
              url: 'headphones_and_headsets',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Аксессуары',
              url: 'accessories',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Смарт-часы и браслеты',
              url: 'smart_watches_and_bracelets',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Акксессуары',
              url: 'accessories',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          icon: '../img/laptop-computer.png',
          title: 'Ноутбуки и компьютеры',
          url: 'laptop_computer',
          submenu: [
            {
              title: 'Смартфоны',
              url: 'smartphones',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Наушники и гарнитуры',
              url: 'headphones_and_headsets',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Аксессуары',
              url: 'accessories',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Смарт-часы и браслеты',
              url: 'smart_watches_and_bracelets',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Акксессуары',
              url: 'accessories',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            }
          ]
        },
        {
          id: 3,
          icon: '../img/game.png',
          title: 'Игры',
          url: 'games',
          submenu: [
            {
              title: 'Смартфоны',
              url: 'smartphones',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Наушники и гарнитуры',
              url: 'headphones_and_headsets',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Аксессуары',
              url: 'accessories',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Смарт-часы и браслеты',
              url: 'smart_watches_and_bracelets',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Акксессуары',
              url: 'accessories',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            }
          ]
        },
        {
          id: 4,
          icon: '../img/relax.png',
          title: 'Все для дома',
          url: 'relax',
          submenu: [
            {
              title: 'Смартфоны',
              url: 'smartphones',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Наушники и гарнитуры',
              url: 'headphones_and_headsets',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Аксессуары',
              url: 'accessories',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Смарт-часы и браслеты',
              url: 'smart_watches_and_bracelets',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Акксессуары',
              url: 'accessories',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            }
          ]
        },
        {
          id: 5,
          icon: '../img/bread.png',
          title: 'Продукты',
          url: 'products',
          submenu: [
            {
              title: 'Смартфоны',
              url: 'smartphones',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Наушники и гарнитуры',
              url: 'headphones_and_headsets',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Аксессуары',
              url: 'accessories',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Смарт-часы и браслеты',
              url: 'smart_watches_and_bracelets',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Акксессуары',
              url: 'accessories',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            }
          ]
        },
        {
          id: 6,
          icon: '../img/open-book.png',
          title: 'Книги',
          url: 'books',
          submenu: [
            {
              title: 'Смартфоны',
              url: 'smartphones',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Наушники и гарнитуры',
              url: 'headphones_and_headsets',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Аксессуары',
              url: 'accessories',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Смарт-часы и браслеты',
              url: 'smart_watches_and_bracelets',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Акксессуары',
              url: 'accessories',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            }
          ]
        },
        {
          id: 7,
          icon: '../img/gym.png',
          title: 'Спорт и хобби',
          url: 'gym',
          submenu: [
            {
              title: 'Смартфоны',
              url: 'smartphones',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Наушники и гарнитуры',
              url: 'headphones_and_headsets',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Аксессуары',
              url: 'accessories',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Смарт-часы и браслеты',
              url: 'smart_watches_and_bracelets',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Акксессуары',
              url: 'accessories',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            }
          ]
        },
        {
          id: 8,
          icon: '../img/pacifier.png',
          title: 'Детям',
          url: 'for_children',
          submenu: [
            {
              title: 'Смартфоны',
              url: 'smartphones',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Наушники и гарнитуры',
              url: 'headphones_and_headsets',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Аксессуары',
              url: 'accessories',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Смарт-часы и браслеты',
              url: 'smart_watches_and_bracelets',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Акксессуары',
              url: 'accessories',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            }
          ]
        },
        {
          id: 9,
          icon: '../img/makeup.png',
          title: 'Красота',
          url: 'makeup',
          submenu: [
            {
              title: 'Смартфоны',
              url: 'smartphones',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Наушники и гарнитуры',
              url: 'headphones_and_headsets',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Аксессуары',
              url: 'accessories',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Смарт-часы и браслеты',
              url: 'smart_watches_and_bracelets',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
                }
              ]
            },
            {
              title: 'Акксессуары',
              url: 'accessories',
              list: [
                {
                  title: 'Android',
                  url: 'android'
                },
                {
                  title: 'iPhone',
                  url: 'iphone'
                },
                {
                  title: 'Беспроводная зарядка',
                  url: 'wireless_charger',
                },
                {
                  title: '120 Гц Экран',
                  url: '120hz_screen'
                },
                {
                  title: 'Snapdragon 855+',
                  url: 'snapdragon_855+'
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

