<template>
  <header>
    <div class="content">
      <div class="left-box">
        <Clickable
          class="menu-button"
          @onClick="onToggleSideMenu"
        >
          <div />
          <div />
          <div />
        </Clickable>
        <p class="title">Vuejs Boilerplate</p>
      </div>
      <div class="right-box">
<!--        <Popover-->
<!--          content={(-->
<!--            <a href="/" onClick={this._onLogout}>Logout</a>-->
<!--          )}-->
<!--          trigger="click"-->
<!--        >-->
<!--          <div class="user-box">-->
<!--            <img-->
<!--              class="avatar"-->
<!--              src="https://picsum.photos/300"-->
<!--              alt=""-->
<!--            />-->
<!--            <p class="name">hoanght</p>-->
<!--          </div>-->
<!--        </Popover>-->
        <div class="language-box">
          <Clickable
            v-for="item in ['en', 'vi']"
            :key="item"
            :class="['language-button']"
            @onClick="onChangeLanguage"
          >
            {{ item.toUpperCase() }}
          </Clickable>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Clickable from '@/components/Clickable.vue'

export default {
  name: 'Header',
  components: {
    Clickable
  },
  methods: {
    onToggleSideMenu() {
    },

    onChangeLanguage() {
    }
  }
}
</script>

<style scoped lang="scss">
  header {
    width: 100%;
    height: 60px;
    color: white;
    display: flex;
    background-color: green;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
    z-index: 1;

    .content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .left-box {
        display: flex;
        align-items: center;

        .menu-button {
          width: 20px;
          height: 20px;
          margin-right: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          div {
            height: 2px;
            width: 100%;
            background-color: white;
          }
        }

        .title {
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 1px;
        }
      }

      .right-box {
        display: flex;
        align-items: center;

        .user-box {
          display: flex;
          align-items: center;
          margin-right: 20px;
          cursor: pointer;
          user-select: none;

          .avatar {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            margin-right: 20px;
          }

          .name {
            font-size: 16px;
            letter-spacing: 0.21px;
            margin-bottom: 0;
            margin-right: 10px;
          }

          .anticon {
            font-size: 12px;
          }
        }

        .language-box {
          display: flex;

          .language-button {
            margin-left: 10px;
            border: 1px solid white;
            width: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            padding-top: 2px;
            transition: color 0.2s, background-color 0.2s;

            &.active {
              background-color: white;
              color: green;
            }
          }
        }
      }
    }
  }
</style>
