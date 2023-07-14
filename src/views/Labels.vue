<template>
    <div>
        <Layout>
            <div class="types">

                <ul>
                    <li>
                        <svg class="icon">
                            <use xlink:href="#return"/>
                        </svg>
                    </li>
                    <li>
                        添加类别
                    </li>
                    <li>完成</li>
                </ul>
            </div>
            <div class="tags">
                <div>
                    <p>餐饮</p>
                    <ul>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>

                    </ul>
                </div>
                <div>
                    <p>购物</p>
                    <ul>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>

                    </ul>
                </div>
                <div>
                    <p>交通</p>
                    <ul>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>

                    </ul>
                </div>
                <div>
                    <p>居住</p>
                    <ul>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#add"/>
                            </svg>
                            <p>添加</p>
                        </li>

                    </ul>
                </div>
            </div>

        </Layout>
    </div>
</template>

<script lang="js">
    export default {
        name: '',


    };
</script>
<style lang="scss" scoped>
  .types {
    background: #ffda47;
    display: flex;
    height: 64px;

    ul {
      display: flex;
      flex-grow: 1;
      justify-content: space-between;
      align-items: center;
      background: #ffda47;
      font-size: 24px;
      color: #FFFFFF;
      padding: 0 20px;

      li {
        &:nth-child(3) {
          font-size: 18px;
        }

      }
    }
  }

  p {
    text-align: center;
    color:#888
  }

  .tags {
    height: calc(100vh - 120px);
    flex-grow: 1;
    padding: 16px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;


    ul {
      display: flex;
      text-align: center;
      flex-wrap: wrap;


      li {
        border-radius: 50%;
        width: 20%;
        padding: 8px 0;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon {
          background: #f5f5f5;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          margin-bottom: 5px;

          &.selected {
            background: #ffda47;

          }
        }


      }
    }


  }


</style>

