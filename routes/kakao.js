var express = require('express');
const kakaoEmbed = require('../lib/kakaoEmbed');
const apiRouter = express.Router();


var Post=require('../models/Post');
var User=require('../models/User');

apiRouter.post('/sayHello', function(req, res) {
    let responseBody = new kakaoEmbed();
    responseBody.addText('안녕하세요. 모두의 공모ZONE입니다 :)');
    res.status(200).send(responseBody.output());
  });
  
  
  apiRouter.post('/category', function(req, res) {

    let responseBody = new kakaoEmbed();
    responseBody
    .addText('원하는 카테고리를 선택해주세요')
    .addQuickReplies('숭실대학교', { action: 'message', messageText: '숭실대학교'})
    .addQuickReplies('서울시', { action: 'message', messageText: '서울시'})
    .addQuickReplies('스파르탄SW', { action: 'message', messageText: '스파르탄SW'})
    .addQuickReplies('동작구청', { action: 'message', messageText: '동작구청'})
    .addQuickReplies('중앙대학교', { action: 'message', messageText: '중앙대학교'})
    .addQuickReplies('IT연합', { action: 'message', messageText: 'IT연합'})
    .addQuickReplies('동작초등학교', { action: 'message', messageText: '동작초등학교'})
    .addQuickReplies('기독교연합', { action: 'message', messageText: '기독교연합'});
    res.status(200).send(responseBody.output());
  });
  
  //숭실대학교
  apiRouter.post('/category1', function(req, res){
      let responseBody = new kakaoEmbed();
      Post.find({group:'숭실대학교'}).limit(3).exec((err, data)=>{
          responseBody
          .addListCard()
          .setCardheader('숭실대학교')
          .addCarditem(
            `${data[0].title}`,
            `${data[0].body}`,
              'http://www.hongdesign.com/img/identity/img_iden20_1.jpg'
          )
          .addCarditem(
            `${data[1].title}`,
            `${data[1].body}`,
              'http://www.hongdesign.com/img/identity/img_iden20_1.jpg'
          )
          .addCarditem(
            `${data[2].title}`,
            `${data[2].body}`,
            'http://www.hongdesign.com/img/identity/img_iden20_1.jpg'
        )
        .addCardButton('자세히', { action: 'webLink', webLinkUrl: 'http://gonggam.toast.paas-ta.com/' })
        .addQuickReplies('카테고리', { action: 'message', messageText: '카테고리'})
        .addQuickReplies('처음으로', { action: 'message', messageText: '처음으로'})
        res.status(200).send(responseBody.output());
          });
        });



//서울시
apiRouter.post('/category2', function(req, res){
    let responseBody = new kakaoEmbed();
    Post.find({group:'서울시'}).limit(3).exec((err, data)=>{
        responseBody
        .addListCard()
        .setCardheader('서울시')
        .addCarditem(
          `${data[0].title}`,
          `${data[0].body}`,
            'https://lh3.googleusercontent.com/proxy/AmkNEKrjNwqaJrsCX7IYGB2GhFuSxHNNli_-FdC-Du67EzDwaZ8tL6J8zw-1A57LPlsbvQg0h8xxwoOnDBEb9BlOM2uzpX6iFheTpHfDEMiQlrYzZNEevCNprvoEXApr2YPVrR15A1lBU1u_TQPI1H0D3JhGAGalNceKZQKuXma1ZuEO-hxOq00NnL3jyw'
        )
        .addCarditem(
          `${data[1].title}`,
          `${data[1].body}`,
            'https://lh3.googleusercontent.com/proxy/AmkNEKrjNwqaJrsCX7IYGB2GhFuSxHNNli_-FdC-Du67EzDwaZ8tL6J8zw-1A57LPlsbvQg0h8xxwoOnDBEb9BlOM2uzpX6iFheTpHfDEMiQlrYzZNEevCNprvoEXApr2YPVrR15A1lBU1u_TQPI1H0D3JhGAGalNceKZQKuXma1ZuEO-hxOq00NnL3jyw'
        )
        .addCarditem(
          `${data[2].title}`,
          `${data[2].body}`,
          'https://lh3.googleusercontent.com/proxy/AmkNEKrjNwqaJrsCX7IYGB2GhFuSxHNNli_-FdC-Du67EzDwaZ8tL6J8zw-1A57LPlsbvQg0h8xxwoOnDBEb9BlOM2uzpX6iFheTpHfDEMiQlrYzZNEevCNprvoEXApr2YPVrR15A1lBU1u_TQPI1H0D3JhGAGalNceKZQKuXma1ZuEO-hxOq00NnL3jyw'
      )
      .addCardButton('자세히', { action: 'webLink', webLinkUrl: 'http://gonggam.toast.paas-ta.com/' })
      .addQuickReplies('카테고리', { action: 'message', messageText: '카테고리'})
      .addQuickReplies('처음으로', { action: 'message', messageText: '처음으로'})
      res.status(200).send(responseBody.output());
        });
      });

//스파르탄SW
apiRouter.post('/category3', function(req, res){
    let responseBody = new kakaoEmbed();
    Post.find({group:'스파르탄SW'}).limit(3).exec((err, data)=>{
        responseBody
        .addListCard()
        .setCardheader('스파르탄SW')
        .addCarditem(
          `${data[0].title}`,
          `${data[0].body}`,
            'https://image.freepik.com/free-vector/spartan-logo-design-ready-to-use_111165-17.jpg'
        )
        .addCarditem(
          `${data[1].title}`,
          `${data[1].body}`,
            'https://image.freepik.com/free-vector/spartan-logo-design-ready-to-use_111165-17.jpg'
        )
        .addCarditem(
          `${data[2].title}`,
          `${data[2].body}`,
          'https://image.freepik.com/free-vector/spartan-logo-design-ready-to-use_111165-17.jpg'
      )
      .addCardButton('자세히', { action: 'webLink', webLinkUrl: 'http://gonggam.toast.paas-ta.com/' })
      .addQuickReplies('카테고리', { action: 'message', messageText: '카테고리'})
      .addQuickReplies('처음으로', { action: 'message', messageText: '처음으로'})
      res.status(200).send(responseBody.output());
        });
      });
//동작구청
apiRouter.post('/category4', function(req, res){
    let responseBody = new kakaoEmbed();
    Post.find({group:'동작구청'}).limit(3).exec((err, data)=>{
        responseBody
        .addListCard()
        .setCardheader('동작구청')
        .addCarditem(
          `${data[0].title}`,
          `${data[0].body}`,
            'https://lh3.googleusercontent.com/proxy/rA9DR79tV4UuyPwXsF9m_rfxDVNXEv6Rfm_9h_DI-GpQaDmemy6E5M1raWTKMS92vZgeaw6TayX7_EyXNdXaIa3GyZYctKhOcauEEubzecT8ogdlLS7sAg'
        )
        .addCarditem(
          `${data[1].title}`,
          `${data[1].body}`,
            'https://lh3.googleusercontent.com/proxy/rA9DR79tV4UuyPwXsF9m_rfxDVNXEv6Rfm_9h_DI-GpQaDmemy6E5M1raWTKMS92vZgeaw6TayX7_EyXNdXaIa3GyZYctKhOcauEEubzecT8ogdlLS7sAg'
        )
        .addCarditem(
          `${data[2].title}`,
          `${data[2].body}`,
          'https://lh3.googleusercontent.com/proxy/rA9DR79tV4UuyPwXsF9m_rfxDVNXEv6Rfm_9h_DI-GpQaDmemy6E5M1raWTKMS92vZgeaw6TayX7_EyXNdXaIa3GyZYctKhOcauEEubzecT8ogdlLS7sAg'
      )
      .addCardButton('자세히', { action: 'webLink', webLinkUrl: 'http://gonggam.toast.paas-ta.com/' })
      .addQuickReplies('카테고리', { action: 'message', messageText: '카테고리'})
      .addQuickReplies('처음으로', { action: 'message', messageText: '처음으로'})
      res.status(200).send(responseBody.output());
        });
      });

//중앙대학교
apiRouter.post('/category5', function(req, res){
    let responseBody = new kakaoEmbed();
    Post.find({group:'중앙대학교'}).limit(3).exec((err, data)=>{z
        responseBody
        .addListCard()
        .setCardheader('중앙대학교')
        .addCarditem(
          `${data[0].title}`,
          `${data[0].body}`,
            'https://www.cau.ac.kr/cau/img/about/ui1_a_2.png'
        )
        .addCarditem(
          `${data[1].title}`,
          `${data[1].body}`,
            'https://www.cau.ac.kr/cau/img/about/ui1_a_2.png'
        )
        .addCarditem(
          `${data[2].title}`,
          `${data[2].body}`,
          'https://www.cau.ac.kr/cau/img/about/ui1_a_2.png'
      )
      .addCardButton('자세히', { action: 'webLink', webLinkUrl: 'http://gonggam.toast.paas-ta.com/' })
      .addQuickReplies('카테고리', { action: 'message', messageText: '카테고리'})
      .addQuickReplies('처음으로', { action: 'message', messageText: '처음으로'})
      res.status(200).send(responseBody.output());
        });
      });


//IT연합
apiRouter.post('/category6', function(req, res){
    let responseBody = new kakaoEmbed();
    Post.find({group:'IT연합'}).limit(3).exec((err, data)=>{
        responseBody
        .addListCard()
        .setCardheader('IT연합')
        .addCarditem(
          `${data[0].title}`,
          `${data[0].body}`,
            'https://lh3.googleusercontent.com/proxy/FcZAciY3P8B9gCUFQoGxw_GXVjvasfVCtZPbDm1Jiy-TrDbeVczMP9nHv9t-ELcTpMnRayYb8oPqVKtsBpvZQ-PGGIVmkhem8HthUs493T8C6bcaDps9Yl-Byp9qR6flsFZ5Rw'
        )
        .addCarditem(
          `${data[1].title}`,
          `${data[1].body}`,
            'https://lh3.googleusercontent.com/proxy/FcZAciY3P8B9gCUFQoGxw_GXVjvasfVCtZPbDm1Jiy-TrDbeVczMP9nHv9t-ELcTpMnRayYb8oPqVKtsBpvZQ-PGGIVmkhem8HthUs493T8C6bcaDps9Yl-Byp9qR6flsFZ5Rw'
        )
        .addCarditem(
          `${data[2].title}`,
          `${data[2].body}`,
          'https://lh3.googleusercontent.com/proxy/FcZAciY3P8B9gCUFQoGxw_GXVjvasfVCtZPbDm1Jiy-TrDbeVczMP9nHv9t-ELcTpMnRayYb8oPqVKtsBpvZQ-PGGIVmkhem8HthUs493T8C6bcaDps9Yl-Byp9qR6flsFZ5Rw'
      )
      .addCardButton('자세히', { action: 'webLink', webLinkUrl: 'http://gonggam.toast.paas-ta.com/' })
      .addQuickReplies('카테고리', { action: 'message', messageText: '카테고리'})
      .addQuickReplies('처음으로', { action: 'message', messageText: '처음으로'})
      res.status(200).send(responseBody.output());
        });
      });

//동작초등학교
apiRouter.post('/category7', function(req, res){
    let responseBody = new kakaoEmbed();
    Post.find({group:'동작초등학교'}).limit(3).exec((err, data)=>{
        responseBody
        .addListCard()
        .setCardheader('동작초등학교')
        .addCarditem(
          `${data[0].title}`,
          `${data[0].body}`,
            'https://iam-common-r.akamaized.net/iamclass/introduction/3524/logoImage/3524_%EC%84%9C%EC%9A%B8%EB%8F%99%EC%9E%91%EC%B4%88%EB%93%B1%ED%95%99%EA%B5%90.png'
        )
        .addCarditem(
          `${data[1].title}`,
          `${data[1].body}`,
            'https://iam-common-r.akamaized.net/iamclass/introduction/3524/logoImage/3524_%EC%84%9C%EC%9A%B8%EB%8F%99%EC%9E%91%EC%B4%88%EB%93%B1%ED%95%99%EA%B5%90.png'
        )
        .addCarditem(
          `${data[2].title}`,
          `${data[2].body}`,
          'https://iam-common-r.akamaized.net/iamclass/introduction/3524/logoImage/3524_%EC%84%9C%EC%9A%B8%EB%8F%99%EC%9E%91%EC%B4%88%EB%93%B1%ED%95%99%EA%B5%90.png'
      )
      .addCardButton('자세히', { action: 'webLink', webLinkUrl: 'http://gonggam.toast.paas-ta.com/' })
      .addQuickReplies('카테고리', { action: 'message', messageText: '카테고리'})
      .addQuickReplies('처음으로', { action: 'message', messageText: '처음으로'})
      res.status(200).send(responseBody.output());
        });
      });


//기독교연합
apiRouter.post('/category8', function(req, res){
    let responseBody = new kakaoEmbed();
    Post.find({group:'기독교연합'}).limit(3).exec((err, data)=>{
        responseBody
        .addListCard()
        .setCardheader('기독교연합')
        .addCarditem(
          `${data[0].title}`,
          `${data[0].body}`,
            'https://lh3.googleusercontent.com/proxy/CuvkyLEiUo5lmwOmu6kJv1IieeeK9cY02TbqqPApHcafBqqlMLw_-G7Zt2hQYqt6xUoWnhSk4eKEc0v0mDg05IV6mDYxZFkvcxfotYUYQNtmkfI9QOHiP9Z3b3I1Vps0'
        )
        .addCarditem(
          `${data[1].title}`,
          `${data[1].body}`,
            'https://lh3.googleusercontent.com/proxy/CuvkyLEiUo5lmwOmu6kJv1IieeeK9cY02TbqqPApHcafBqqlMLw_-G7Zt2hQYqt6xUoWnhSk4eKEc0v0mDg05IV6mDYxZFkvcxfotYUYQNtmkfI9QOHiP9Z3b3I1Vps0'
        )
        .addCarditem(
          `${data[2].title}`,
          `${data[2].body}`,
          'https://lh3.googleusercontent.com/proxy/CuvkyLEiUo5lmwOmu6kJv1IieeeK9cY02TbqqPApHcafBqqlMLw_-G7Zt2hQYqt6xUoWnhSk4eKEc0v0mDg05IV6mDYxZFkvcxfotYUYQNtmkfI9QOHiP9Z3b3I1Vps0'
      )
      .addCardButton('자세히', { action: 'webLink', webLinkUrl: 'http://gonggam.toast.paas-ta.com/' })
      .addQuickReplies('카테고리', { action: 'message', messageText: '카테고리'})
      .addQuickReplies('처음으로', { action: 'message', messageText: '처음으로'})
      res.status(200).send(responseBody.output());
        });
      });







module.exports = apiRouter;