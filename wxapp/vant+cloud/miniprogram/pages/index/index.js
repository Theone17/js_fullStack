import Notify from '../dist/notify/notify';

Page({
  data: {
    newGroupModal: false,
    groupName: ""
  },

  showNewGroupModal() {
    this.setData({
      newGroupModal: true
    });
  },

  getUserInfo(event) {
    console.log(event.detail);
  },

  onClose() {
    this.setData({ 
      close: false 
    });
  },

  onGroupNameChange(event) {
    // console.log(event.detail);
    this.setData({
      groupName: event.detail
    });
  },

  closeDialog() {
    this.setData({
      newGroupModal: false
    });
  },

  createGroup() {
    let self = this;
    if (self.data.groupName === '') {
      Notify({
        text: '群组名不能为空',
        duration: 1500,
        selector: '#notify-selector',
        backgroundColor: '#dc3545'
      });
      self.selectComponent('#new-group-modal').stopLoading();
      return;
    } else {
      wx.cloud.callFunction({
        name: 'createGroup',
        data: {
          groupName: self.data.groupName
        },
        success(res) {
          self.setData({
            newGroupModal: false,
            groupName: ''
          })
          Notify({
            text: '新建成功',
            duration: 1500,
            selector: '#notify-selector',
            backgroundColor: '#28a745'
          });
          setTimeout(() => {
            wx.switchTab({
              url: `/pages/group/group`
            })
          },1500)
        },
        fail(error) {
          console.log(error)
        }
      })
    }
  }
});