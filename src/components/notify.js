import { notification } from 'antd';
notification.config({
    placement: 'topLeft',
    top: 120,
    duration: 3,
  });

export default (msg)=>{
    

const key = 'updatable';

const openNotification = () => {
  notification.open({
    key,
    message: msg,
    // description: 'description.',
    style: {
        color: '#fff',
        fontWeight:'700',
        // backgroundImage: '-webkit-gradient(linear, left top, left bottom, color-stop(0, #feab47), color-stop(1, #ff5200))'
        backgroundImage: '-webkit-gradient(linear, left top, left bottom, color-stop(0, #feab47), color-stop(1, #feab47))'
      },
  });
//   setTimeout(() => {
//     notification.open({
//       key,
//       message: msg,
//     //   description: 'New description.',
//     });
//   }, 100);
};

openNotification();
}