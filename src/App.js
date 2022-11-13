import logo from './logo.svg';
import './App.css';
import {ethers} from "ethers";
import Header from './components/Header/Header';
//import lillyabi_ from './LillyAbi.json';
import mumlillyabi_ from './lilly_mum_abi.json';
import rankingabi_ from './rankingAbi.json';
import lillypoolabi from  './lillypoolabi.json';
import lillycertabi from './lillycertabi.json';
import nftabi_ from './nft_abi.json';
import airdropABI from './airdropABI.json';
import { useEffect, useState } from "react";
import frogvideo from './ai_for_tiago_p2.mov';


let provider ;
let provider2 ;
let signer;
let signer2;
let client_address;
let rank;
let owner;
let lilly;
var leaderboard;
var token;
var address_;
var score_;
var user_;
let position_ = 0;
let posin_;
let nft_;
let nft_id_n1;
let image_link;
let rank3;
let connected_;
let lilly_owner_wall;
let lilly_client;
let lilly_client_balance;
let lilly_client_balance_n;
let lilly_pool;
let lilly_pool_own;
let lilly_cert;
let cert_paid;
let cert_paid_n;
let airdrop;

const ranking_smart = "0xe85ba3f04612e4520a4a50a299e6ceb7478ec245"; //new 13102202
const owner_address = "0xBc84e019B9B5822f550CA592F4c3ba538C9b5Ed5";
const private_key = "3e6621433a071c4807ad0755890b4501deadb268bb6d8a94a73973f4c77e8c8f";
const nft_collec = "0xef898c3ddedbcfa26906bbafadaff0be650b613a"; //new 13102022
const lilly_mum = "0x3BF193eac2Ae97f00362C8915b21AEe998CB0397"; //new 13102022
const lilly_pool_ad = "0x7b5D68C46167EbAc97D9c0B1FecA8D26499B88d4";
const lilly_cert_ad = "0x548a8f8583d2db6033bcc2c5ad53a777b3ce1379";


const mumbai_inf = "https://polygon-mumbai.infura.io/v3/a5e4eea98c984395939373a9d800aa3e";
const gen_inf = "https://goerli.infura.io/v3/a5e4eea98c984395939373a9d800aa3e";
const infura_key = "a5e4eea98c984395939373a9d800aa3e";
const private_wallet = "3c2318d213ee868b4c8a051023e6c85ed9ec80fe8417f421ad8063891b7ec445";


const lilly_owner = "0xBc84e019B9B5822f550CA592F4c3ba538C9b5Ed5";
const lilly_owner_private = "3e6621433a071c4807ad0755890b4501deadb268bb6d8a94a73973f4c77e8c8f";
const lilly_airdrop_address = "0x3258e0A400257852Dd275762AF66CeB072DC7e8E";

const mint_link = "https://frugmint.vercel.app/";
const open_mintdapp = async() => {window.open(mint_link, '_blank')};


let reward = [280,274,267,260,254,247,240,234,227,221,214,207,200,194,187,110,109,108,108,107,107,106,106,105,105,104,103,103,102,102,101,101,100,100,99,98,98,97,97,96,96,95,94,94,93,93,92,92,91,91,90,89,88,87,87,86,86,85,85,84,83,83,82,82,81,81,80,80,79,78,78,77,77,76,76,75,74,74,73,73,72,31,30,30,29,28,28,28,27,26,26,25,25,24,23,23,22,21,21];


const infuragoerli = async () => {
  const network = "goerli";
  const infuraprovider = new ethers.providers.InfuraProvider(
    network,
    infura_key,
  );

  const infurasigner = new ethers.Wallet(private_wallet, infuraprovider);
  rank3 = new ethers.Contract( ranking_smart , rankingabi_ , signer2 );
  const testrank = await rank3.leaderboard(1);
  const owner_wallet = "3e6621433a071c4807ad0755890b4501deadb268bb6d8a94a73973f4c77e8c8f"
  const infuraowner = new ethers.Wallet(owner_wallet, infuraprovider);
//  lilly_pool = new ethers.Contract(lilly_pool_ad, lillypoolabi, infuraowner);
  //lilly_cert = new ethers.Contract(lilly_cert_ad,lillycertabi, signer2);
  ////################ console.log(testrank.user);
  ////################ console.log("infura");
  ////################ console.log(rank3);
  ////################ console.log(lilly_pool);

}

const sign_rank = async () => {

  const score = await rank.add_member("Kilo1", "33", "0xD5D7f7cdda240aE62d6a0489E63300a0C0F29B0e");
  ////################ console.log(score);
  return score;

}

const obtain_rank2 = async() => {
       ////################ console.log(rank_table);
       ////################ console.log(parseInt(rank.leaderboard(1)));
       ////################ console.log(rank);
}

const obtain_load = async() =>{
  provider = new ethers.providers.Web3Provider(window.ethereum);
  const rank = new ethers.Contract( ranking_smart ,   JSON.stringify(rankingabi_) , provider );
  ////################ console.log(rank);
  let leaderboard__ = await rank.leaderboard(0);

}

const get_all_address = async() =>{
  const all_address = await rank.see_rank_address(0);
////################   console.log(all_address);
  return all_address;

}

const print = function(){
  console.log("provider: " + provider);
  console.log("address: " + client_address);
  console.log("rank: " + rank);

}

  var rank_user = [];
  var rank_address = [];
  var rank_score = [];
  var rank_table = [];

  var rank_prize_ = [];
  var rank_user_ = [];
  var rank_address_ = [];
  var rank_score_ = [];
  var rank_position_ = [];


  const contractConnection_ = async  () =>{
    ////################ console.log("Obtaining rank")


    const network = "goerli";

    //infura provider
    const infuraprovider = new ethers.providers.InfuraProvider(
      network,
      infura_key,
    );

    const infurasigner = new ethers.Wallet(private_wallet, infuraprovider);
    rank = await new ethers.Contract( ranking_smart , rankingabi_ , infurasigner );
    nft_ = await new ethers.Contract(nft_collec, nftabi_, infurasigner);

    ////################ console.log("O yea!");
    ////################ console.log(nft_id_n1);
    ////################ console.log(lilly_pool);


   };




   const nft_data = async () => {
     let json = await nft_.tokenURI(1);

     ////################ console.log(json);

     let supply_ = await nft_.totalSupply();
     let supply_n = supply_._hex;
     let totalsupply = supply_n.slice(2);
     let totalsupply_int = parseInt(totalsupply);
     let  new_minter = [];
     let  num_of_nft = [];

     for(let i=1; i<(totalsupply_int + 1); i++ ){
       let add_ = await nft_.ownerOf(i);
       new_minter[i-1] = add_;
       num_of_nft[i-1] = 1;
       ////################ console.log(add_);
     }

     ////################ console.log(new_minter);
     ////################ console.log(num_of_nft);

     lilly.update_minter (new_minter);
     lilly.update_holder(new_minter, num_of_nft);
     //lilly_client.withdraw_lilly();

   }


  function  Connectionwork(){
    return(
      console.log(connected_)
    )
  }



function App() {
  const [connected, set_connected] = useState();
  const [rank_data, set_rank_data] = useState();
  const [metalink, setimetalink] = useState();
  const [metadata_global, set_metadata_global] = useState();
  const[metadata, set_metadata] = useState();
  const[goto_game, set_go_to] = useState();
  const[nftown , set_nftown] = useState();
  const[prize_expected, set_prize_expected] = useState();
  const [nft_balance, set_nft_balance] = useState();
  const [nft_reward, set_nft_reward] = useState();
  const [cert_received_n, set_cert_received_n] = useState();
  const [lilly_avaiable , set_lilly_avaiable] = useState();


  Connectionwork();
  const infura_key = "a5e4eea98c984395939373a9d800aa3e";


          var minter_list = []; //who minted the nft from mumbai
          var minter_rew_list = []; // who receive the reward for minting the nft from goerli
          var update_lilly_mint = []; // addresses added to lilly smart contract mumbai
          var owner_list = []; // who is now an owner of the nft from mumbai

  const contractConnection2 = async  () => {
    console.log("dd");
    const infuraprovider = new ethers.providers.InfuraProvider(
      'goerli',
      infura_key,
    );
    const infurasigner = new ethers.Wallet(private_wallet, infuraprovider);

    await window.ethereum.enable();
    provider2 = new ethers.providers.Web3Provider(window.ethereum);
    signer2 = await provider2.getSigner();
    client_address = await signer2.getAddress();
    rank = await new ethers.Contract( ranking_smart , rankingabi_ , signer2 );
    owner = new ethers.Wallet(private_key, provider2);
    nft_ = await new ethers.Contract(nft_collec, nftabi_, infurasigner);
    const owner_wallet = "3e6621433a071c4807ad0755890b4501deadb268bb6d8a94a73973f4c77e8c8f"
    const infuraowner = new ethers.Wallet(owner_wallet, infuraprovider);
    lilly_pool = await new ethers.Contract(lilly_pool_ad, lillypoolabi, infuraowner);



    lilly_owner_wall = new ethers.Wallet(lilly_owner_private, provider2);
    lilly = await new ethers.Contract(lilly_mum, mumlillyabi_, lilly_owner_wall);
    lilly_client = await new ethers.Contract(lilly_mum, mumlillyabi_, signer2);
    lilly_cert =await new ethers.Contract(lilly_cert_ad,lillycertabi, lilly_owner_wall);
    airdrop = await new ethers.Contract(lilly_airdrop_address, airdropABI, lilly_owner_wall);



    ////################ console.log("lillybalance");
    console.log(client_address);
    lilly_client_balance = await lilly_client.balanceOf(client_address);
    lilly_client_balance_n = lilly_client_balance/1000000000000000000;

    //lilly_pool_own =await  new ethers.Contract(lilly_pool_ad, lillypoolabi, lilly_owner_wall);

    //console.log(lilly_client_balance);
    console.log(cert_paid_n);
    console.log(rank);
    console.log(nft_);
    set_connected(true);

    obtain_image();

    contractConnection_() ; ////////////////////////////////////this fucking linke
    obtainrank();
    _data_();
    nft_data_update();
    lilly_avaiability();

   };

   const cert_lilly_buy = async () =>{
//     let id_free = lilly_cert.totalSupply()-5;
     await lilly_client.certificate_buy(1);
     await lilly_pool.certificate_update_2(1,true,client_address);
  //   let eth_received = await lilly_pool.view_received_eth(client_address);
  //   console.log(eth_received);
//      //pay on lilly token
// the owner address (one address) mint the nft and send you
// the ETH POOL is update with the address and certificate avaiable   ------ lilly_pool
// the pool is unpaused and you are authorized to receive the ETH //
//
 }

 const retire_eth = async () => {
   await lilly_pool.withdraw_ethereum_3(client_address, {gasLimit: 1000000,});


 }

 const retire_lilly = async() => {

    lilly_client.withdraw_lilly();
 }

   const [data_solv, set_data_solv] = useState();
   const _data_ = async() =>{
    //let  __t = client_address;
    console.log("data elaboration");
    cert_paid_n = 0;
    let t_cert_received_n = 0;

     for (let i= 0; i<100; i++ ){
       let t__ = await lilly_client.CERTIF(i);
       let t_add_ = t__._address;
       console.log(t_add_);

              if(t_add_ == client_address ){
                       let temp_cert = await lilly_client.CERTIF(i);
                       let temp_cert_ = temp_cert.NFTPAID.toNumber();
                       cert_paid_n = cert_paid_n + temp_cert_;
                       console.log(cert_paid_n);
                       console.log(temp_cert_);

                     }
               }

       for (let i= 0; i<100; i++ ){
         let a__ = await lilly_pool.CERTIF(i);
         let a_add_ = a__._address;
         console.log(a_add_);

                if(a_add_ == client_address ){
                  if(a__.avaiable == false){
                         let temp_rece_ = a__.NFT_token.toNumber();
                         t_cert_received_n = t_cert_received_n + temp_rece_;
                         console.log("temp received");
                         console.log(temp_rece_);
                       }
          }
       }
                 console.log("data elaborated");
                 console.log(t_cert_received_n);
                set_data_solv(true);
                set_cert_received_n(t_cert_received_n);
   }


  const nft_data_update = async() => {
        console.log("nft_minter and owwner data");
        const network = "goerli";

        //infura provider
        const infuraprovider = new ethers.providers.InfuraProvider(
          'goerli',
          infura_key,
        );


        var infurasigner = new ethers.Wallet(private_wallet, infuraprovider);
        nft_ = await new ethers.Contract(nft_collec, nftabi_, infurasigner);
        let n_minter = await lilly.n_minter();
        n_minter = n_minter /1000000000000000000;
        console.log(n_minter);
        let new_minter_number = 0;
        let nft_mint = []
        let j = 0;
        let i = 0;

        for (i=0; i< 50; i++){
            let temp_minter = await nft_.minter(i);

            if(temp_minter != "0x0000000000000000000000000000000000000000"){

                    minter_list[i] = await nft_.minter(i);
                    console.log(minter_list[i]);


                    if(i > n_minter){
                      update_lilly_mint[j] = temp_minter;
                      nft_mint[j] = 4;
                      j = j +1;
                    }

                    new_minter_number = new_minter_number +1;

          }


      }

        if(i >= n_minter){
          lilly.change_n_minter_m(new_minter_number);
        }
        console.log("total minter list:");
        console.log(minter_list);
        console.log(update_lilly_mint);
        console.log(nft_mint);

        lilly.update_holder(update_lilly_mint, nft_mint);


  }

  const lilly_avaiability = async() => {
    let lilly_avaiable_temp = 0;
    for (let i= 0; i <200; i++){
          let lilly_cert = await lilly.holder(i);
          let lilly_add = lilly_cert._user;
          if (lilly_add == client_address){
            lilly_avaiable_temp = lilly_avaiable_temp + (lilly_cert._lilly_avaiable/1000000000000000000);
          }


    }

    console.log("lilly_avaiable: ");
    set_lilly_avaiable(lilly_avaiable_temp);

    console.log(lilly_avaiable_temp);


  }




  const obtain_image = async () => {



    nft_id_n1 = await nft_.tokenOfOwnerByIndex(client_address,0);
    var nb = await nft_.walletOfOwner(client_address);
    ////################console.log("nft balance");
    ////################console.log(nb);
    //var nb_v = nb.toNumber();
    //set_nft_balance(nb_v);

    ////################console.log("let's image");
    var json_link = await nft_.tokenURI(nft_id_n1.toNumber());
    var nft_bala = await nft_.balanceOf(client_address);
    ////################console.log(nft_bala);
    ////################console.log(json_link);

    fetch(json_link)
        .then(res => res.json())
        .then((out) => {

        })
        .catch(err => { throw err });
    const meta_fetch = await fetch (json_link);
    var metadata_fetch = await meta_fetch.json();
    var metadata_str = JSON.stringify(metadata_fetch);
    const metadata_json = JSON.parse(metadata_str);
    set_metadata(metadata_json.attributes[0].value);
    set_metadata_global(metadata_json);
    ////################console.log(metadata_global);

  }

  const obtainrank = async () => {
    ////################console.log('rank');

    ////################console.log("Obtaining rank")


    const network = "goerli";

    //infura provider
    const infuraprovider = new ethers.providers.InfuraProvider(
      'goerli',
      infura_key,
    );



    var infurasigner = new ethers.Wallet(private_wallet, infuraprovider);
    rank = await new ethers.Contract( ranking_smart , rankingabi_ , infurasigner );
    nft_ = await new ethers.Contract(nft_collec, nftabi_, infurasigner);
  ////################  console.log(rank);
    ////################console.log("O yea!");
    var sum = 0;
    var square_sum = 0;
    var prize_t_score  = 0;
    var prize_t_posit= 0;

    for (let i = 0; i < 100; i++){

            const position = await rank.leaderboard(i);

                  rank_user[i]= (position.user);
                  rank_address[i] = (position._address);
                  rank_score[i] = (position.score);
                  rank_table[i] = [position.user, position._address, position.score];
                  ////################ console.log(position.user);
                  sum = sum + (rank_score[i]/1000000000000000000);
                  square_sum = square_sum + (rank_score[i]/1000000000000000000)**2;
                  if (position._address == client_address){
                    prize_t_score = prize_t_score + position.score;
                    prize_t_posit = prize_t_posit + (100/(i+1));


                  }

                  ////################ console.log(i);
                                            }
        var mean = sum/100;
        var variance= ((square_sum/100)- mean**2);
        //var std = variance**(0.5)
        var prize_temp = ((prize_t_score / mean)*variance) + prize_t_posit;
         ////################ console.log("ranking stats");
        set_prize_expected(Math.round(prize_temp));
        ////################ console.log(sum);
        ////################ console.log(mean);
        ////################ console.log(variance);
        ////################ console.log(prize_temp);
        // console.log(rank_user);
        // console.log(rank_address);
        // console.log(rank_score);
        // console.log(rank_table);
        set_rank_data(true);
      }



      const payrank = async () => {

        // const network = "goerli";
        console.log("payrank");
        //infura provider
        const infuraprovider = new ethers.providers.InfuraProvider(
          'goerli',
          infura_key,
        );



        var infurasigner = new ethers.Wallet(private_wallet, infuraprovider);
        rank = await new ethers.Contract( ranking_smart , rankingabi_ , infurasigner );
        nft_ = await new ethers.Contract(nft_collec, nftabi_, infurasigner);

        var sum = 0;
        var square_sum = 0;
        var prize_t_score  = 0;
        var prize_t_posit= 0;


        for (let i = 1; i < 101; i++){

                const position = await rank.leaderboard(i);

                      rank_user_[i]= (position.user);
                      rank_address_[i] = (position._address);
                      rank_score_[i] = (position.score);
                      rank_position_[i] = i + 1;
                      ////################ console.log(position.user);
                      sum = sum + (rank_score_[i]/1000000000000000000);
                      square_sum = square_sum + (rank_score_[i]/1000000000000000000)**2;
                      if (position._address == client_address){
                        prize_t_score = prize_t_score + position.score;
                        prize_t_posit = prize_t_posit + (100/i);


                      }

                                                }
            var mean = sum/100;
            var variance= ((square_sum/100)- mean**2);
            var prize_temp = ((prize_t_score / mean)*variance) + prize_t_posit;

            for (let i = 0; i < 100; i++){

                    const position = await rank.leaderboard(i);
                        console.log(position._address);

                          console.log(position);
                          rank_user[i]= (position.user);
                          rank_address[i] = (position._address);
                          rank_score[i] = (position.score);
                          rank_table[i] = [position.user, position._address, position.score];
                          prize_t_posit = prize_t_posit + (100/(i+1));
                          var sing_prize = ((position.score / mean)*variance) + prize_t_posit;
                          rank_prize_[i] = sing_prize;



                    }

              console.log("sending prize");


              //lilly.update_leaderboard(rank_position_, rank_address_, rank_prize_);
              console.log(rank_address_);
              console.log(rank_prize_);
              await airdrop.bulkAirdropERC20("0x3BF193eac2Ae97f00362C8915b21AEe998CB0397", rank_address_ ,rank_prize_);
              console.log("prize sent");
              // for (let i = 1; i < 101; i++){
              //
              //   await airdrop.bulkAirdropERC20("0x3BF193eac2Ae97f00362C8915b21AEe998CB0397", rank_address_,rank_prize_);
              //   delay(15000);
              //
              //
              // }

          }





  const obtain_prize = async() => {
      //await lilly.prime_transfer(client_address , '890');

            await lilly.prime_transfer(client_address , prize_expected , {gasLimit: 1000000,});
            console.log(lilly_avaiable);

        }


  const play = async () => {
    console.log("pay");
    await lilly_client.pay_to_play();
    set_go_to(true);

  }

  const [time, set_time] = useState();
  const [year, set_year] = useState();
  const [month, set_month] = useState();
  const [day, set_day] = useState();
  const [hour, set_hour] = useState();
  const [minute, set_minute]= useState();
  const [seconds, set_seconds] = useState();

  const [next_prize_reward, set_next_prize_reward] = useState()
  //const [date, set_date] = useState();

  async function clock(){
    var reward_date = new Date(2022,10,5,20,5,59);
    //console.log(reward_date);
    var date_now = new Date();
    var date = (1000*60) - date_now%(1000*60);
  //  set_date(date_);
    await delay(1000);
  //  console.log(date);
  //  await delay(3000);
     // var seconds = date.getSeconds();
     // var minute = date.getMinutes();
     // var hour = date.getHours();
     // var day = date.getDate();
     // var month = date.getMonth();
     // var year = date.getFullYear();
     //
     // var seconds =  date_now.getSeconds() - reward_date.getSeconds() ;
     // var minute = reward_date.getMinutes() - date_now.getMinutes();
     // var hour = reward_date.getHours() - date_now.getHours();
     // var day = reward_date.getDate() - date_now.getDate();
     // var month = reward_date.getMonth() - date_now.getMonth();
     // var year = reward_date.getFullYear() - date_now.getFullYear();

     var seconds =  Math.round((date % (1000*60)/(1000)));
     var minute = Math.round((date % (1000*60*60)/(1000*60)));
     var hour = Math.round((date % (1000*60*60*24)/(1000*60*60)));
     var day = Math.round(date /(1000*60*60*24));
     var remainingseconds = (seconds + minute*60 + hour*3600 + day *(60*60*24));
     //console.log(remainingseconds);

     if (remainingseconds == 1){
       var owner_wallet = "3e6621433a071c4807ad0755890b4501deadb268bb6d8a94a73973f4c77e8c8f"

       //lilly = await new ethers.Contract(lilly_mum, mumlillyabi_, lilly_owner_wall);
       payrank();
      // set_date(date_);
       console.log("give prize reward");
       console.log(client_address);
       console.log(lilly);
       //lilly.prime_transfer(client_address , 1000);
       //set_next_prize_reward(reward_date);
     };
    set_seconds(seconds);
    set_minute(minute);
    set_hour(hour);
    set_day(day);
    set_month(month);
    set_year(year);


  }




  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }


  clock();
  return (



    <div className="App">


    {!connected &&

        <div className = "firstpage">

            <div className = "span"> </div>
            <div className = "span"> </div>

            <button className = "glow-on-hover" onClick = {open_mintdapp} >
                MINT
            </button>


            <button className = "glow-on-hover" onClick = {contractConnection2} >
                FRUG GAME
            </button>


        </div>


    }

    {connected &&
    <div>
        <div>
            <Header/>
        </div>

      <div className = "body">

      <div className = "game">



                { metadata_global &&
                   <div class = "nft_div">

                        <img src=  {metadata_global.image} class= "nft_image"/>


                        <div>
                              <h2> METADATA </h2>
                             <b>{metadata_global.attributes[0].trait_type}</b>:  {metadata}
                             <div >
                               <b>{metadata_global.attributes[1].trait_type} </b>:  {metadata_global.attributes[1].value}
                               <div >
                                 <b>{metadata_global.attributes[2].trait_type}</b>:  {metadata_global.attributes[2].value}

                                   <div >
                                     <b>{metadata_global.attributes[3].trait_type}</b>:  {metadata_global.attributes[3].value}

                                     <div >
                                        <b>{metadata_global.attributes[4].trait_type}</b>:  {metadata_global.attributes[4].value}


                                         </div>
                                       </div>
                                    </div>
                                  </div>
                           </div>

                  </div>




                }






          </div>


                  {data_solv &&
                              <div>
                                <div>
                                {client_address}
                                </div>
                                <div>

                                lILLY CLIENT balance  : {lilly_client_balance_n}
                                </div>

                                <div>
                                100 LILLY = 0.00000001 ETH   ---------
                                  <button onClick = {cert_lilly_buy}>
                                  convert lilly
                                  </button>
                                </div>

                                <div>
                                  POOL BALANCE :              --------------------
                                  <button onClick = {retire_eth}>
                                    receive eth
                                  </button>
                                </div>


                                <div>
                                    nft balance: {nft_balance}   ---------------
                                     SINGLE NFT REWARD = 100 ---------------
                                    nft reward: {nft_balance*100}
                                </div>





                                <div>

                                  Paid certificate  :
                                  {cert_paid_n}
                                  -----------
                                  Received certificate  :
                                  {cert_received_n}
                                  ------------

                                  Prize expected   :
                                  {prize_expected}


                                </div>


                              </div>
                        }

          <div>

              TIME {year} - {month} -  {day}  {hour} : {minute} : {seconds}

          </div>

          <div>
              <button className = "glow-on-hover" onClick = {open_mintdapp} >
                  MINT
              </button>



              <button className = "glow-on-hover" onClick = {nft_data}>

              NFT REWARD
              </button>


              <button className = "glow-on-hover" onClick = {retire_lilly} >
                    GET MINT LILLY
              </button>


          { goto_game ||

            <button className = "glow-on-hover" onClick  = {play}>
              Go to game
            </button>




          }
          </div>
          { goto_game &&

          <div >

                <iframe src="https://fruggamegoerli.vercel.app/" className = "gamebox"></iframe>



          </div>


        }


      </div>


          {rank_data &&
                    <div className = "span_table">



                        <table id="myTable">

                                <td>
                                      <tr>
                                       <b>RANK</b>
                                      </tr>
                                      <tr>
                                      1
                                      </tr>
                                      <tr>
                                      2
                                      </tr>
                                      <tr>
                                      3
                                      </tr>
                                      <tr>
                                      4
                                      </tr>
                                      <tr>
                                      5
                                      </tr>
                                      <tr>
                                      6
                                      </tr>
                                      <tr>
                                      7
                                      </tr>
                                      <tr>
                                      8
                                      </tr>
                                      <tr>
                                      9
                                      </tr>
                                      <tr>
                                      10
                                      </tr>
                                      <tr>
                                      11
                                      </tr>
                                      <tr>
                                      12
                                      </tr>
                                      <tr>
                                      13
                                      </tr>
                                      <tr>
                                      14
                                      </tr>
                                      <tr>
                                      15
                                      </tr>
                                      <tr>
                                      16
                                      </tr>
                                      <tr>
                                      17
                                      </tr>
                                      <tr>
                                      18
                                      </tr>
                                      <tr>
                                      19
                                      </tr>
                                      <tr>
                                      20
                                      </tr>
                                      <tr>
                                      21
                                      </tr>
                                      <tr>
                                      22
                                      </tr>
                                      <tr>
                                      23
                                      </tr>
                                      <tr>
                                      24
                                      </tr>
                                      <tr>
                                      25
                                      </tr>
                                      <tr>
                                      26
                                      </tr>
                                      <tr>
                                      27
                                      </tr>
                                      <tr>
                                      28
                                      </tr>
                                      <tr>
                                      29
                                      </tr>
                                      <tr>
                                      30
                                      </tr>
                                      <tr>
                                      31
                                      </tr>
                                      <tr>
                                      32
                                      </tr>
                                      <tr>
                                      33
                                      </tr>
                                      <tr>
                                      34
                                      </tr>
                                      <tr>
                                      35
                                      </tr>
                                      <tr>
                                      36
                                      </tr>
                                      <tr>
                                      37
                                      </tr>
                                      <tr>
                                      38
                                      </tr>
                                      <tr>
                                      39
                                      </tr>
                                      <tr>
                                      40
                                      </tr>
                                      <tr>
                                      41
                                      </tr>
                                      <tr>
                                      42
                                      </tr>
                                      <tr>
                                      43
                                      </tr>
                                      <tr>
                                      44
                                      </tr>
                                      <tr>
                                      45
                                      </tr>
                                      <tr>
                                      46
                                      </tr>
                                      <tr>
                                      47
                                      </tr>
                                      <tr>
                                      48
                                      </tr>
                                      <tr>
                                      49
                                      </tr>
                                      <tr>
                                      50
                                      </tr>
                                      <tr>
                                      51
                                      </tr>
                                      <tr>
                                      52
                                      </tr>
                                      <tr>
                                      53
                                      </tr>
                                      <tr>
                                      54
                                      </tr>
                                      <tr>
                                      55
                                      </tr>
                                      <tr>
                                      56
                                      </tr>
                                      <tr>
                                      57
                                      </tr>
                                      <tr>
                                      58
                                      </tr>
                                      <tr>
                                      59
                                      </tr>
                                      <tr>
                                      60
                                      </tr>
                                      <tr>
                                      61
                                      </tr>
                                      <tr>
                                      62
                                      </tr>
                                      <tr>
                                      63
                                      </tr>
                                      <tr>
                                      64
                                      </tr>
                                      <tr>
                                      65
                                      </tr>
                                      <tr>
                                      66
                                      </tr>
                                      <tr>
                                      67
                                      </tr>
                                      <tr>
                                      68
                                      </tr>
                                      <tr>
                                      69
                                      </tr>
                                      <tr>
                                      70
                                      </tr>
                                      <tr>
                                      71
                                      </tr>
                                      <tr>
                                      72
                                      </tr>
                                      <tr>
                                      73
                                      </tr>
                                      <tr>
                                      74
                                      </tr>
                                      <tr>
                                      75
                                      </tr>
                                      <tr>
                                      76
                                      </tr>
                                      <tr>
                                      77
                                      </tr>
                                      <tr>
                                      78
                                      </tr>
                                      <tr>
                                      79
                                      </tr>
                                      <tr>
                                      80
                                      </tr>
                                      <tr>
                                      81
                                      </tr>
                                      <tr>
                                      82
                                      </tr>
                                      <tr>
                                      83
                                      </tr>
                                      <tr>
                                      84
                                      </tr>
                                      <tr>
                                      85
                                      </tr>
                                      <tr>
                                      86
                                      </tr>
                                      <tr>
                                      87
                                      </tr>
                                      <tr>
                                      88
                                      </tr>
                                      <tr>
                                      89
                                      </tr>
                                      <tr>
                                      90
                                      </tr>
                                      <tr>
                                      91
                                      </tr>
                                      <tr>
                                      92
                                      </tr>
                                      <tr>
                                      93
                                      </tr>
                                      <tr>
                                      94
                                      </tr>
                                      <tr>
                                      95
                                      </tr>
                                      <tr>
                                      96
                                      </tr>
                                      <tr>
                                      97
                                      </tr>
                                      <tr>
                                      98
                                      </tr>
                                      <tr>
                                      99
                                      </tr>
                                      <tr>
                                      100
                                      </tr>

                                </td>

                                <td>
                                      <tr>
                                       <b>ADDRESS</b>
                                      </tr>
                                      <tr>
                                      {rank_address[1]}
                                      </tr>
                                      <tr>
                                      {rank_address[2]}
                                      </tr>
                                      <tr>
                                      {rank_address[3]}
                                      </tr>
                                      <tr>
                                      {rank_address[4]}
                                      </tr>
                                      <tr>
                                      {rank_address[5]}
                                      </tr>
                                      <tr>
                                      {rank_address[6]}
                                      </tr>
                                      <tr>
                                      {rank_address[7]}
                                      </tr>
                                      <tr>
                                      {rank_address[8]}
                                      </tr>
                                      <tr>
                                      {rank_address[9]}
                                      </tr>
                                      <tr>
                                      {rank_address[10]}
                                      </tr>
                                      <tr>
                                      {rank_address[11]}
                                      </tr>
                                      <tr>
                                      {rank_address[12]}
                                      </tr>
                                      <tr>
                                      {rank_address[13]}
                                      </tr>
                                      <tr>
                                      {rank_address[14]}
                                      </tr>
                                      <tr>
                                      {rank_address[15]}
                                      </tr>
                                      <tr>
                                      {rank_address[16]}
                                      </tr>
                                      <tr>
                                      {rank_address[17]}
                                      </tr>
                                      <tr>
                                      {rank_address[18]}
                                      </tr>
                                      <tr>
                                      {rank_address[19]}
                                      </tr>
                                      <tr>
                                      {rank_address[20]}
                                      </tr>
                                      <tr>
                                      {rank_address[21]}
                                      </tr>
                                      <tr>
                                      {rank_address[22]}
                                      </tr>
                                      <tr>
                                      {rank_address[23]}
                                      </tr>
                                      <tr>
                                      {rank_address[24]}
                                      </tr>
                                      <tr>
                                      {rank_address[25]}
                                      </tr>
                                      <tr>
                                      {rank_address[26]}
                                      </tr>
                                      <tr>
                                      {rank_address[27]}
                                      </tr>
                                      <tr>
                                      {rank_address[28]}
                                      </tr>
                                      <tr>
                                      {rank_address[29]}
                                      </tr>
                                      <tr>
                                      {rank_address[30]}
                                      </tr>
                                      <tr>
                                      {rank_address[31]}
                                      </tr>
                                      <tr>
                                      {rank_address[32]}
                                      </tr>
                                      <tr>
                                      {rank_address[33]}
                                      </tr>
                                      <tr>
                                      {rank_address[34]}
                                      </tr>
                                      <tr>
                                      {rank_address[35]}
                                      </tr>
                                      <tr>
                                      {rank_address[36]}
                                      </tr>
                                      <tr>
                                      {rank_address[37]}
                                      </tr>
                                      <tr>
                                      {rank_address[38]}
                                      </tr>
                                      <tr>
                                      {rank_address[39]}
                                      </tr>
                                      <tr>
                                      {rank_address[40]}
                                      </tr>
                                      <tr>
                                      {rank_address[41]}
                                      </tr>
                                      <tr>
                                      {rank_address[42]}
                                      </tr>
                                      <tr>
                                      {rank_address[43]}
                                      </tr>
                                      <tr>
                                      {rank_address[44]}
                                      </tr>
                                      <tr>
                                      {rank_address[45]}
                                      </tr>
                                      <tr>
                                      {rank_address[46]}
                                      </tr>
                                      <tr>
                                      {rank_address[47]}
                                      </tr>
                                      <tr>
                                      {rank_address[48]}
                                      </tr>
                                      <tr>
                                      {rank_address[49]}
                                      </tr>
                                      <tr>
                                      {rank_address[50]}
                                      </tr>
                                      <tr>
                                      {rank_address[51]}
                                      </tr>
                                      <tr>
                                      {rank_address[52]}
                                      </tr>
                                      <tr>
                                      {rank_address[53]}
                                      </tr>
                                      <tr>
                                      {rank_address[54]}
                                      </tr>
                                      <tr>
                                      {rank_address[55]}
                                      </tr>
                                      <tr>
                                      {rank_address[56]}
                                      </tr>
                                      <tr>
                                      {rank_address[57]}
                                      </tr>
                                      <tr>
                                      {rank_address[58]}
                                      </tr>
                                      <tr>
                                      {rank_address[59]}
                                      </tr>
                                      <tr>
                                      {rank_address[60]}
                                      </tr>
                                      <tr>
                                      {rank_address[61]}
                                      </tr>
                                      <tr>
                                      {rank_address[62]}
                                      </tr>
                                      <tr>
                                      {rank_address[63]}
                                      </tr>
                                      <tr>
                                      {rank_address[64]}
                                      </tr>
                                      <tr>
                                      {rank_address[65]}
                                      </tr>
                                      <tr>
                                      {rank_address[66]}
                                      </tr>
                                      <tr>
                                      {rank_address[67]}
                                      </tr>
                                      <tr>
                                      {rank_address[68]}
                                      </tr>
                                      <tr>
                                      {rank_address[69]}
                                      </tr>
                                      <tr>
                                      {rank_address[70]}
                                      </tr>
                                      <tr>
                                      {rank_address[71]}
                                      </tr>
                                      <tr>
                                      {rank_address[72]}
                                      </tr>
                                      <tr>
                                      {rank_address[73]}
                                      </tr>
                                      <tr>
                                      {rank_address[74]}
                                      </tr>
                                      <tr>
                                      {rank_address[75]}
                                      </tr>
                                      <tr>
                                      {rank_address[76]}
                                      </tr>
                                      <tr>
                                      {rank_address[77]}
                                      </tr>
                                      <tr>
                                      {rank_address[78]}
                                      </tr>
                                      <tr>
                                      {rank_address[79]}
                                      </tr>
                                      <tr>
                                      {rank_address[80]}
                                      </tr>
                                      <tr>
                                      {rank_address[81]}
                                      </tr>
                                      <tr>
                                      {rank_address[82]}
                                      </tr>
                                      <tr>
                                      {rank_address[83]}
                                      </tr>
                                      <tr>
                                      {rank_address[84]}
                                      </tr>
                                      <tr>
                                      {rank_address[85]}
                                      </tr>
                                      <tr>
                                      {rank_address[86]}
                                      </tr>
                                      <tr>
                                      {rank_address[87]}
                                      </tr>
                                      <tr>
                                      {rank_address[88]}
                                      </tr>
                                      <tr>
                                      {rank_address[89]}
                                      </tr>
                                      <tr>
                                      {rank_address[90]}
                                      </tr>
                                      <tr>
                                      {rank_address[91]}
                                      </tr>
                                      <tr>
                                      {rank_address[92]}
                                      </tr>
                                      <tr>
                                      {rank_address[93]}
                                      </tr>
                                      <tr>
                                      {rank_address[94]}
                                      </tr>
                                      <tr>
                                      {rank_address[95]}
                                      </tr>
                                      <tr>
                                      {rank_address[96]}
                                      </tr>
                                      <tr>
                                      {rank_address[97]}
                                      </tr>
                                      <tr>
                                      {rank_address[98]}
                                      </tr>
                                      <tr>
                                      {rank_address[99]}
                                      </tr>
                                      <tr>
                                      {rank_address[100]}
                                      </tr>
                                </td>

                                <td>
                                        <tr>
                                         <b>USER </b>
                                        </tr>
                                        <tr>
                                        {rank_user[1]}
                                        </tr>
                                        <tr>
                                        {rank_user[2]}
                                        </tr>
                                        <tr>
                                        {rank_user[3]}
                                        </tr>
                                        <tr>
                                        {rank_user[4]}
                                        </tr>
                                        <tr>
                                        {rank_user[5]}
                                        </tr>
                                        <tr>
                                        {rank_user[6]}
                                        </tr>
                                        <tr>
                                        {rank_user[7]}
                                        </tr>
                                        <tr>
                                        {rank_user[8]}
                                        </tr>
                                        <tr>
                                        {rank_user[9]}
                                        </tr>
                                        <tr>
                                        {rank_user[10]}
                                        </tr>
                                        <tr>
                                        {rank_user[11]}
                                        </tr>
                                        <tr>
                                        {rank_user[12]}
                                        </tr>
                                        <tr>
                                        {rank_user[13]}
                                        </tr>
                                        <tr>
                                        {rank_user[14]}
                                        </tr>
                                        <tr>
                                        {rank_user[15]}
                                        </tr>
                                        <tr>
                                        {rank_user[16]}
                                        </tr>
                                        <tr>
                                        {rank_user[17]}
                                        </tr>
                                        <tr>
                                        {rank_user[18]}
                                        </tr>
                                        <tr>
                                        {rank_user[19]}
                                        </tr>
                                        <tr>
                                        {rank_user[20]}
                                        </tr>
                                        <tr>
                                        {rank_user[21]}
                                        </tr>
                                        <tr>
                                        {rank_user[22]}
                                        </tr>
                                        <tr>
                                        {rank_user[23]}
                                        </tr>
                                        <tr>
                                        {rank_user[24]}
                                        </tr>
                                        <tr>
                                        {rank_user[25]}
                                        </tr>
                                        <tr>
                                        {rank_user[26]}
                                        </tr>
                                        <tr>
                                        {rank_user[27]}
                                        </tr>
                                        <tr>
                                        {rank_user[28]}
                                        </tr>
                                        <tr>
                                        {rank_user[29]}
                                        </tr>
                                        <tr>
                                        {rank_user[30]}
                                        </tr>
                                        <tr>
                                        {rank_user[31]}
                                        </tr>
                                        <tr>
                                        {rank_user[32]}
                                        </tr>
                                        <tr>
                                        {rank_user[33]}
                                        </tr>
                                        <tr>
                                        {rank_user[34]}
                                        </tr>
                                        <tr>
                                        {rank_user[35]}
                                        </tr>
                                        <tr>
                                        {rank_user[36]}
                                        </tr>
                                        <tr>
                                        {rank_user[37]}
                                        </tr>
                                        <tr>
                                        {rank_user[38]}
                                        </tr>
                                        <tr>
                                        {rank_user[39]}
                                        </tr>
                                        <tr>
                                        {rank_user[40]}
                                        </tr>
                                        <tr>
                                        {rank_user[41]}
                                        </tr>
                                        <tr>
                                        {rank_user[42]}
                                        </tr>
                                        <tr>
                                        {rank_user[43]}
                                        </tr>
                                        <tr>
                                        {rank_user[44]}
                                        </tr>
                                        <tr>
                                        {rank_user[45]}
                                        </tr>
                                        <tr>
                                        {rank_user[46]}
                                        </tr>
                                        <tr>
                                        {rank_user[47]}
                                        </tr>
                                        <tr>
                                        {rank_user[48]}
                                        </tr>
                                        <tr>
                                        {rank_user[49]}
                                        </tr>
                                        <tr>
                                        {rank_user[50]}
                                        </tr>
                                        <tr>
                                        {rank_user[51]}
                                        </tr>
                                        <tr>
                                        {rank_user[52]}
                                        </tr>
                                        <tr>
                                        {rank_user[53]}
                                        </tr>
                                        <tr>
                                        {rank_user[54]}
                                        </tr>
                                        <tr>
                                        {rank_user[55]}
                                        </tr>
                                        <tr>
                                        {rank_user[56]}
                                        </tr>
                                        <tr>
                                        {rank_user[57]}
                                        </tr>
                                        <tr>
                                        {rank_user[58]}
                                        </tr>
                                        <tr>
                                        {rank_user[59]}
                                        </tr>
                                        <tr>
                                        {rank_user[60]}
                                        </tr>
                                        <tr>
                                        {rank_user[61]}
                                        </tr>
                                        <tr>
                                        {rank_user[62]}
                                        </tr>
                                        <tr>
                                        {rank_user[63]}
                                        </tr>
                                        <tr>
                                        {rank_user[64]}
                                        </tr>
                                        <tr>
                                        {rank_user[65]}
                                        </tr>
                                        <tr>
                                        {rank_user[66]}
                                        </tr>
                                        <tr>
                                        {rank_user[67]}
                                        </tr>
                                        <tr>
                                        {rank_user[68]}
                                        </tr>
                                        <tr>
                                        {rank_user[69]}
                                        </tr>
                                        <tr>
                                        {rank_user[70]}
                                        </tr>
                                        <tr>
                                        {rank_user[71]}
                                        </tr>
                                        <tr>
                                        {rank_user[72]}
                                        </tr>
                                        <tr>
                                        {rank_user[73]}
                                        </tr>
                                        <tr>
                                        {rank_user[74]}
                                        </tr>
                                        <tr>
                                        {rank_user[75]}
                                        </tr>
                                        <tr>
                                        {rank_user[76]}
                                        </tr>
                                        <tr>
                                        {rank_user[77]}
                                        </tr>
                                        <tr>
                                        {rank_user[78]}
                                        </tr>
                                        <tr>
                                        {rank_user[79]}
                                        </tr>
                                        <tr>
                                        {rank_user[80]}
                                        </tr>
                                        <tr>
                                        {rank_user[81]}
                                        </tr>
                                        <tr>
                                        {rank_user[82]}
                                        </tr>
                                        <tr>
                                        {rank_user[83]}
                                        </tr>
                                        <tr>
                                        {rank_user[84]}
                                        </tr>
                                        <tr>
                                        {rank_user[85]}
                                        </tr>
                                        <tr>
                                        {rank_user[86]}
                                        </tr>
                                        <tr>
                                        {rank_user[87]}
                                        </tr>
                                        <tr>
                                        {rank_user[88]}
                                        </tr>
                                        <tr>
                                        {rank_user[89]}
                                        </tr>
                                        <tr>
                                        {rank_user[90]}
                                        </tr>
                                        <tr>
                                        {rank_user[91]}
                                        </tr>
                                        <tr>
                                        {rank_user[92]}
                                        </tr>
                                        <tr>
                                        {rank_user[93]}
                                        </tr>
                                        <tr>
                                        {rank_user[94]}
                                        </tr>
                                        <tr>
                                        {rank_user[95]}
                                        </tr>
                                        <tr>
                                        {rank_user[96]}
                                        </tr>
                                        <tr>
                                        {rank_user[97]}
                                        </tr>
                                        <tr>
                                        {rank_user[98]}
                                        </tr>
                                        <tr>
                                        {rank_user[99]}
                                        </tr>
                                        <tr>
                                        {rank_user[100]}
                                        </tr>

                                </td>

                                <td>
                                        <tr>
                                         <b>SCORE </b>
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[1])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[2])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[3])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[4])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[5])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[6])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[7])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[8])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[9])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[10])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[11])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[12])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[13])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[14])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[15])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[16])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[17])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[18])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[19])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[20])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[21])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[22])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[23])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[24])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[25])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[26])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[27])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[28])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[29])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[30])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[31])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[32])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[33])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[34])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[35])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[36])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[37])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[38])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[39])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[40])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[41])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[42])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[43])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[44])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[45])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[46])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[47])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[48])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[49])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[50])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[51])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[52])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[53])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[54])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[55])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[56])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[57])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[58])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[59])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[60])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[61])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[62])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[63])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[64])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[65])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[66])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[67])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[68])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[69])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[70])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[71])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[72])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[73])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[74])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[75])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[76])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[77])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[78])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[79])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[80])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[81])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[82])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[83])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[84])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[85])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[86])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[87])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[88])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[89])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[90])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[91])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[92])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[93])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[94])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[95])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[96])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[97])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[98])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[99])}
                                        </tr>
                                        <tr>
                                        {parseInt(rank_score[100])}
                                        </tr>

                                </td>


                            </table>

                    </div>
                  }








    </div>

  }

  </div>





  );
}

export default App;
