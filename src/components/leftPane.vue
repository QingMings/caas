<template>
  <div id="leftPane">
    <div class="query-wrapper">
      <Input search placeholder="输入单位名搜索"/>
    </div>
    <Collapse v-model="value2" accordion>
      <Dropdown transfer ref="contextmenu" placement="bottom-start" style="display:none" trigger="click">
        <DropdownMenu slot="list">
          <DropdownItem>单位分布</DropdownItem>
          <DropdownItem>建筑分布</DropdownItem>
          <DropdownItem>查看属性</DropdownItem>
          <DropdownItem>定位</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Panel name="1">
        按级别
        <!--<p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>-->
        <p slot="content">
          <Tree :data="data5"  show-checkbox :render="renderContent"></Tree>
        </p>
      </Panel>
      <Panel name="2">
        按行政区域
        <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
          Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
          Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
      </Panel>
      <Panel name="3">
        按学科
        <p slot="content">
          乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
      </Panel>
      <Panel name="4">
        按生态区
        <p slot="content">
          乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
import {treeIcon} from '@/resource';

export default {
  name: 'leftPane',
  data() {
    return {
      value2: '1',
      data5: [
        {
          title: '中国农业科学院',
          expand: true,
          hasChild: true,
          // render: (h, { root, node, data }) => h('span', {
          //   style: {
          //     display: 'inline-block',
          //     width: '100%'
          //   }
          // }, [
          //   h('span', [
          //     h('Icon', {
          //       props: {
          //         type: 'ios-folder-outline'
          //       },
          //       style: {
          //         marginRight: '8px'
          //       }
          //     }),
          //     h('span', data.title)
          //   ]),
          //   h('span', {
          //     style: {
          //       display: 'inline-block',
          //       float: 'right',
          //       marginRight: '32px'
          //     }
          //   })
          // ]),
          children: [
            {
              title: '院部',
              expand: true,
              hasChild: true,
              children: [
                {
                  title: '所区',
                  expand: true
                }
              ]
            },
            {
              title: '作物科学研究所',
              expand: true,
              hasChild: true,
              children: [
                {
                  title: '北京昌平马池口基地',
                  expand: true
                },
                {
                  title: '河北沽源小麦育种夏繁基地',
                  expand: true
                }
              ]
            }
          ]
        }
      ],
      buttonProps: {
        type: 'default',
        size: 'small'
      }
    };
  },
  methods: {
    renderContent(h, { root, node, data }) {
      return h('span', {
        style: {
          display: 'inline-block',
          width: '100%'
        }
      }, [
        h('span', [
          h('img', {
            style: {
              width: '16px',
              verticalAlign: 'middle',
              marginRight: '8px'
            },
            attrs: {
              src: this.iconType(node.node.hasChild, node.node.expand),
              class: 'ivu-icon'
            }
            // props: {
            //   size: 12,
            //   url: this.iconType(node.node.hasChild, node.node.expand)
            // },
            // style: {
            //   marginRight: '8px'
            // }
          }),
          h('span', {
            on: {
              contextmenu: function (e) {
                // alert("hha")
                e.preventDefault();
                this.$refs.contextmenu.currentVisible = false;
                this.$refs.contextmenu.$refs.reference = e.target;
                this.$refs.contextmenu.currentVisible = true;
              }.bind(this)
            }
          }, data.title)
        ])
      ]);
    },
    iconType(hasChild, expand) {
      console.info(process.env.BASE_URL);
      let iconType = treeIcon.closefolder;
      if (hasChild) {
        if (expand) {
          iconType = treeIcon.openfolder;
        } else {
          iconType = treeIcon.closefolder;
        }
      } else {
        iconType = treeIcon.file;
      }
      return iconType;
    }
  }
};
</script>

<style scoped>

</style>
