const LEGEND_LIST = [
    {id:11, role:"assault", name:"アッシュ", weaponCnt:2, img:"assault/Ash.png"},
    {id:12, role:"assault", name:"バリスティック", weaponCnt:3, img:"assault/Ballistic.png"},
    {id:13, role:"assault", name:"バンガロール", weaponCnt:2, img:"assault/Bangalore.png"},
    {id:14, role:"assault", name:"ヒューズ", weaponCnt:2, img:"assault/Fuse.png"},
    {id:15, role:"assault", name:"マッドマギー", weaponCnt:2, img:"assault/Mad-Maggie.png"},

    {id:21, role:"skirmisher", name:"オクタン", weaponCnt:2, img:"skirmisher/Octane.png"},
    {id:22, role:"skirmisher", name:"オルター", weaponCnt:2, img:"skirmisher/Alter.png"},
    {id:23, role:"skirmisher", name:"パスファインダー", weaponCnt:2, img:"skirmisher/Pathfinder.png"},
    {id:24, role:"skirmisher", name:"ホライゾン", weaponCnt:2, img:"skirmisher/Horizon.png"},
    {id:25, role:"skirmisher", name:"レイス", weaponCnt:2, img:"skirmisher/Wraith.png"},
    {id:26, role:"skirmisher", name:"レヴナント", weaponCnt:2, img:"skirmisher/Revenant.png"},
    {id:27, role:"skirmisher", name:"ヴァルキリー", weaponCnt:2, img:"skirmisher/Valkyrie.png"},

    {id:31, role:"recon", name:"クリプト", weaponCnt:2, img:"recon/Crypto.png"},
    {id:32, role:"recon", name:"シア", weaponCnt:2, img:"recon/Seer.png"},
    {id:33, role:"recon", name:"ブラッドハウンド", weaponCnt:2, img:"recon/Bloodhound.png"},
    {id:34, role:"recon", name:"ヴァンテージ", weaponCnt:2, img:"recon/Vantage.png"},

    {id:41, role:"controller", name:"カタリスト", weaponCnt:2, img:"controller/Catalyst.png"},
    {id:42, role:"controller", name:"コースティック", weaponCnt:2, img:"controller/Coustic.png"},
    {id:43, role:"controller", name:"ランパート", weaponCnt:2, img:"controller/Rampart.png"},
    {id:44, role:"controller", name:"ワットソン", weaponCnt:2, img:"controller/Wattson.png"},

    {id:51, role:"support", name:"コンジット", weaponCnt:2, img:"support/Conduit.png"},
    {id:52, role:"support", name:"ジブラルタル", weaponCnt:2, img:"support/Gibraltar.png"},
    {id:53, role:"support", name:"ニューキャッスル", weaponCnt:2, img:"support/New-Castle.png"},
    {id:54, role:"support", name:"ミラージュ", weaponCnt:2, img:"support/Mirage.png"},
    {id:55, role:"support", name:"ライフライン", weaponCnt:2, img:"support/Lifeline.png"},
    {id:56, role:"support", name:"ローバ", weaponCnt:2, img:"support/Loba.png"},

    {id:999, role:"Mythic", name:"All Legends", weaponCnt:3, img:"Mythic.png"}
];

const FREE_WEAPON_OBJ1 = {id:998, type:"Free", name:"All Weapons", ammo:"Free", img:"image/weapons/nessie.png", type:"other"};
const FREE_WEAPON_OBJ2 = {id:999, type:"Free", name:"All Weapons", ammo:"Free", img:"image/weapons/nessie.png", type:"other"};

const WEAPON_LIST = [
    {id:11, type:"AR", name:"R-301カービン", ammo:"Light", img:"image/weapons/R-301_Carbine_Icon.svg", type:"main"},
    {id:12, type:"AR", name:"VK-47フラットライン", ammo:"Heavy", img:"image/weapons/VK-47_Flatline_Icon.svg", type:"main"},
    {id:13, type:"AR", name:"ハボックライフル", ammo:"Energy", img:"image/weapons/HAVOC_Rifle_Icon.svg", type:"main"},
    {id:14, type:"AR", name:"ヘムロックバーストAR", ammo:"Heavy", img:"image/weapons/Hemlok_Burst_AR_Icon.svg", type:"main"},
    {id:15, type:"AR", name:"ネメシス", ammo:"Energy", img:"image/weapons/Nemesis_Burst_AR_Icon.svg", type:"main"},

    {id:21, type:"SMG", name:"プラウラーバーストPDW", ammo:"Heavy", img:"image/weapons/Prowler_Burst_PDW_Icon.svg", type:"sub"},
    {id:22, type:"SMG", name:"ボルトSMG", ammo:"Energy", img:"image/weapons/Volt_SMG_Icon.svg", type:"sub"},
    {id:23, type:"SMG", name:"C.A.R. SMG", ammo:"Heavy", img:"image/weapons/C.A.R._SMG_Icon.svg", type:"sub"},
    {id:24, type:"SMG", name:"R-99 SMG", ammo:"Light", img:"image/weapons/R-99_SMG_Icon.svg", type:"sub"},
    {id:25, type:"SMG", name:"オルタネーターSMG", ammo:"Light", img:"image/weapons/Alternator_SMG_Icon.svg", type:"sub"},

    {id:31, type:"LMG", name:"L-スターEMG", ammo:"Energy", img:"image/weapons/L-STAR_EMG_Icon.svg", type:"main"},
    {id:32, type:"LMG", name:"M600スピットファイア", ammo:"Light", img:"image/weapons/M600_Spitfire_Icon.svg", type:"main"},
    {id:33, type:"LMG", name:"ディヴォーションLMG", ammo:"Energy", img:"image/weapons/Devotion_LMG_Icon.svg", type:"main"},
    {id:34, type:"LMG", name:"ランページLMG", ammo:"Heavy", img:"image/weapons/Rampage_LMG_Icon.svg", type:"main"},

    {id:41, type:"SR", name:"チャージライフル", ammo:"Sniper", img:"image/weapons/Charge_Rifle_Icon.svg", type:"main"},
    {id:42, type:"SR", name:"ロングボウDMR", ammo:"Sniper", img:"image/weapons/Longbow_DMR_Icon.svg", type:"main"},
    {id:43, type:"SR", name:"クレーバー.50スナイパー", ammo:"Sniper", img:"image/weapons/Kraber_.50-Cal_Sniper_Icon.svg", type:"main"},
    {id:44, type:"SR", name:"センチネル", ammo:"Sniper", img:"image/weapons/Sentinel_Icon.svg", type:"main"},

    {id:51, type:"SG", name:"ピースキーパー", ammo:"Shotgun", img:"image/weapons/Peacekeeper_Icon.svg", type:"sub"},
    {id:52, type:"SG", name:"マスティフショットガン", ammo:"Shotgun", img:"image/weapons/Mastiff_Shotgun_Icon.svg", type:"sub"},
    {id:53, type:"SG", name:"EVA-8オート", ammo:"Shotgun", img:"image/weapons/EVA-8_Auto_Icon.svg", type:"sub"},
    {id:54, type:"SG", name:"モザンビークショットガン", ammo:"Shotgun", img:"image/weapons/Mozambique_Shotgun_Icon.svg", type:"sub"},

    {id:61, type:"Marksman", name:"トリプルテイク", ammo:"Energy", img:"image/weapons/Triple_Take_Icon.svg", type:"main"},
    {id:62, type:"Marksman", name:"G7スカウト", ammo:"Light", img:"image/weapons/G7_Scout_Icon.svg", type:"main"},
    {id:63, type:"Marksman", name:"30-30リピーター", ammo:"Heavy", img:"image/weapons/30-30_Repeater_Icon.svg", type:"main"},
    {id:64, type:"Marksman", name:"ボセックコンパウンドボウ", ammo:"Arrows", img:"image/weapons/Bocek_Compound_Bow_Icon.svg", type:"main"},

    {id:71, type:"Pistol", name:"P2020", ammo:"Light", img:"image/weapons/P2020_Icon.svg", type:"sub"},
    {id:72, type:"Pistol", name:"ウィングマン", ammo:"Sniper", img:"image/weapons/Wingman_Icon.svg", type:"sub"},
    {id:73, type:"Pistol", name:"RE-45オート", ammo:"Light", img:"image/weapons/RE-45_Auto_Icon.svg", type:"sub"},

    FREE_WEAPON_OBJ1,
    FREE_WEAPON_OBJ2
];

const DEFAULT_PARTICLE = {role:"default" , color1:"#FFF", color2:"rgb(255,255,255,0.2)"};

const PARTICLE_SETTING_LIST = [
    {role:"assault" , color1:"#EB3333", color2:"rgb(235,51,51,0.2)"},
    {role:"skirmisher" , color1:"#C2A817", color2:"rgb(194,168,23,0.2)"},
    {role:"recon" , color1:"#9C21E8", color2:"rgb(156,33,232,0.2)"},
    {role:"support" , color1:"#2973E0", color2:"rgb(41,115,224,0.2)"},
    {role:"controller" , color1:"#40CC33", color2:"rgb(64,204,51,0.2)"},
    {role:"Mythic" , color1:"#000", color2:"rgb(0,0,0,0.2)"},
    DEFAULT_PARTICLE    
];

const AMMO_TYPE_LIST = [
    {id:10, type:"Light", name:"Light", ammo:"Light", img:"image/ammo/light.svg", type:"other"},
    {id:20, type:"Heavy", name:"Heavy", ammo:"Heavy", img:"image/ammo/heavy.svg", type:"other"},
    {id:30, type:"Energy", name:"Energy", ammo:"Energy", img:"image/ammo/energy.svg", type:"other"},
    {id:40, type:"Sniper", name:"Sniper", ammo:"Sniper", img:"image/ammo/Sniper.svg", type:"other"},
    {id:50, type:"Shotgun", name:"Shotgun", ammo:"Shotgun", img:"image/ammo/shotgun.svg", type:"other"}
];

let selectedLegendList = [];
let filterLegendIdList = [];
let filterWeaponIdList = [];
let filterWeaponIdList1 = [];
let filterWeaponIdList2 = [];
let selctedParticleList = [];

var legendImgMode  = "";
let legendImgModeBase = "image/legends/";

/**
 * ロード処理
 */
$(function(){
    // selctedParticleListの設定
    // 初期用の設定値「default」を準備
    for(let i=0; i<4; i++){
        selctedParticleList.push(DEFAULT_PARTICLE);
    }
    setParicles();

    // navLegendsBtnへクリックイベント付与
    $("#navLegendsBtn").click(function(){
        $("#navbarToggleExternalContentWeapons").removeClass("show");
    });

    // navWeaponsBtnへクリックイベント付与
    $("#navWeaponsBtn").click(function(){
        $("#navbarToggleExternalContentLegends").removeClass("show");

    });
});

/**
 * レジェンドに対する光エフェクト設定処理
 */
function setParicles(){
    // selctedParticleListをもとに設定を行う
    var player1_particles_mini = Particles1.init({selector: '#player1_scale_mini', color: selctedParticleList[0].color1, sizeVariations: 5, speed: 0.1});
    var player1_particles      = Particles2.init({selector: '#player1_scale_normal', color: selctedParticleList[0].color2, sizeVariations: 10, speed: 0.1});

    var player2_particles_mini = Particles3.init({selector: '#player2_scale_mini', color: selctedParticleList[1].color1, sizeVariations: 5, speed: 0.1});
    var player2_particles      = Particles4.init({selector: '#player2_scale_normal', color: selctedParticleList[1].color2, sizeVariations: 10, speed: 0.1});

    var player3_particles_mini = Particles5.init({selector: '#player3_scale_mini', color: selctedParticleList[2].color1, sizeVariations: 5, speed: 0.1});
    var player3_particles      = Particles6.init({selector: '#player3_scale_normal', color: selctedParticleList[2].color2, sizeVariations: 10, speed: 0.1});

    var player4_particles_mini = Particles7.init({selector: '#player4_scale_mini', color: selctedParticleList[3].color1, sizeVariations: 5, speed: 0.1});
    var player4_particles      = Particles8.init({selector: '#player4_scale_normal', color: selctedParticleList[3].color2, sizeVariations: 10, speed: 0.1});
}

/**
 * Startボタンクリック処理
 */
function onClickStart(){
    console.log("click start");

    // レジェンド画像モードの制御
    let legend_img_mode = $('input[name="legend_img_mode"]:checked').val();
    legendImgMode = legendImgModeBase + legend_img_mode + "/";

    // Free Weapon 排出率上昇機能の制御
    let free_weapon_Flg = $('input[name="free_weapon_Flg"]:checked').val();
    if(free_weapon_Flg === "ON"){
        let freeAdjustmentNum = Number($("#freeAdjustmentNum").val());
        let incrementFreeAdjustmentNum = Number($("#incrementFreeAdjustmentNum").val());
        // TODO 浮動小数点の誤差はめんどくさいので無視しておく
        $("#freeAdjustmentNum").val(freeAdjustmentNum + incrementFreeAdjustmentNum);
    }

    // navのオープン状態をクローズ状態に変更
    $("#navbarToggleExternalContentWeapons").removeClass("show");
    $("#navbarToggleExternalContentLegends").removeClass("show");

    let iikanjiFlg = $("#iikanjiFlg")[0].checked;

    setWeaponIdList(iikanjiFlg);
    setLegendIdList();

    // aniationつけてます
    $(".player_card").css("opacity",0);
    $(".player1").css("opacity",1);
    setTimeout(function() {$(".player3").css("opacity",1);}, 200);
    setTimeout(function() {$(".player2").css("opacity",1);}, 400);
    setTimeout(function() {$(".player4").css("opacity",1);}, 600);
    setTimeout(function() {$(".player_card").removeClass("glitch");}, 1100);

    if(filterLegendIdList.length<4){
        alert("レジェンド数が4未満のため、ルーレットできません。");
        return;
    }

    if(filterWeaponIdList.length < 3){
        alert("武器数が3未満のため、ルーレットできません。");
        return;
    }

    // グローバル変数の初期化（選択レジェンド一覧、画面描画用のList）
    selectedLegendList = [];
    selctedParticleList = [];

    for (let playerNo = 1; playerNo <= 4; playerNo++) {
        setPlayerProperties(playerNo, iikanjiFlg);
    }

    setParicles();
}

/**
 * 1Player分の情報取得処理
 * @param {*} playerNo 
 * @param {*} iikanjiFlg 
 */
function setPlayerProperties(playerNo, iikanjiFlg){
    let legend = getLegend();
    let selectedWeapon = getWeapon(legend.weaponCnt, iikanjiFlg);

    let selecter = ".player" + playerNo;
    $(selecter + " span[data-role]").removeClass();
    $(selecter + " span[data-role]").addClass(legend.role);
    $(selecter + " .card-body").removeClass().addClass("card-body");
    $(selecter + " .card-body").addClass(legend.role);
    $(selecter + " img.legend_img").attr("src",legendImgMode + legend.img);
    $(selecter + " h5").text(legend.name);

    $(selecter + " .weapons_list img").each(function(index, element) {
        let weapon = selectedWeapon[index];
        if(weapon){
            $(element).attr("src",weapon.img);
            $(element).next().text(weapon.name);
            if(index === 2){
                $(element).parent().show();
            }
        }else if(index === 2){
            $(element).parent().hide();
        }
    });

    selctedParticleList.push(
        PARTICLE_SETTING_LIST.find(p => {
            return p.role == legend.role;
        })
    );

    // aniationつけてます
    $(".player_card").addClass("glitch");
}

/**
 * 抽出対象の武器リスト生成
 * @param {*} iikanjiFlg 
 */
function setWeaponIdList(iikanjiFlg){

    filterWeaponIdList = [];
    $(".we_weapon:checked").each(function() {
        //値を取得
        filterWeaponIdList.push(this.value);
    });

    if(iikanjiFlg){
        filterWeaponIdList1 = [];

        // 武器の排出率調整
        let weaponAdjustmentNum = Number($("#weaponAdjustmentNum").val());
        if(Number.isNaN(weaponAdjustmentNum)){
            weaponAdjustmentNum = 0;
        }

        // FreeWeaponの調整
        let freeAdjustmentNum = Number($("#freeAdjustmentNum").val());
        if(Number.isNaN(freeAdjustmentNum)){
            freeAdjustmentNum = 0;
        }

        $(".we_weapon:checked").each(function() {
            //値を取得
            let weaponId = this.value;
            filterWeaponIdList1.push(weaponId);
            let weapon = WEAPON_LIST.find(w => {
                return w.id == weaponId;
            });
            if(weapon.type === "main"){
                for(let num=0; num < weaponAdjustmentNum; num++){
                    filterWeaponIdList1.push(weaponId);
                }

            }
        });

        filterWeaponIdList2 = [];
        $(".we_weapon:checked").each(function() {
            //値を取得
            let weaponId = this.value;
            filterWeaponIdList2.push(weaponId);
            let weapon = WEAPON_LIST.find(w => {
                return w.id == weaponId;
            });
            if(weapon.type === "sub"){
                for(let num=0; num < weaponAdjustmentNum; num++){
                    filterWeaponIdList2.push(weaponId);
                }
            }
        });

        // TODO 現状はFree武器の制御は画面上から変更は不可
        // 必ずFree武器が抽出対象に含まれてしまう
        for(let num=0; num < freeAdjustmentNum; num++){
            filterWeaponIdList1.push("998");
            filterWeaponIdList1.push("999");

            filterWeaponIdList2.push("998");
            filterWeaponIdList2.push("999");
        }
    }
}

/**
 * レジェンドの抽出対象リスト作成
 */
function setLegendIdList(){
    filterLegendIdList = [];
    $(".we_legend:checked").each(function() {
        //値を取得
        filterLegendIdList.push(this.value);
    });
    
    // TODO 本来は武器とは別Flagで管理するべき
    let freeSelectFlg = $("#freeSelectFlg")[0].checked;

    if(freeSelectFlg){
        filterLegendIdList.push("999");
    }
}

/**
 * ランダムでのレジェンド取得
 * @returns legendObject
 */
function getLegend(){
    let legend = {};

    while (true) {
        let index = getRandomInt(filterLegendIdList.length);
        let legendId = filterLegendIdList[index];
        legend = LEGEND_LIST.find(l => {
            return l.id == legendId;
        });
        if(!selectedLegendList.includes(legend)){
            selectedLegendList.push(legend);
            break;
        }
    }
    return legend;
}

/**
 * ランダムでの武器取得
 * @param {*} max 
 * @param {*} iikanjiFlg 
 * @returns ListのWeaponObject
 */
function getWeapon(max, iikanjiFlg){
    var selectedWeapon = [];
    let weapon = {};

    if(!iikanjiFlg){
        for (let i = 0; i < max; i++) {
            getWeaponRand(selectedWeapon, "X", filterWeaponIdList);
        }
    }else{
        // 第1武器を取得・設定
        getWeaponRand(selectedWeapon, "1", filterWeaponIdList1);
        
        // 第2武器を取得・設定
        getWeaponRand(selectedWeapon, "2", filterWeaponIdList2);

        // 特定レジェンド用の第3武器取得をするかの判定
        if(max === 3){
            // 第3武器を取得・設定
            getWeaponRand(selectedWeapon, "3", filterWeaponIdList);
        }
    }
    return selectedWeapon;
}

/**
 * 単一武器を抽出しselectedWeaponへの追加処理
 * @param {*} selectedWeapon 選択済み武器一覧
 * @param {*} kindsId 
 * @param {*} filterList 
 */
function getWeaponRand(selectedWeapon, kindsId, filterList){
    let weapon_kinds = "NORMAL";
    // 武器1 or 武器2の場合
    if(kindsId === "1" || kindsId === "2"){
        // 設定欄の設定値をもとにswitch用のValを取得
        weapon_kinds = $('input[name="weapon'+ kindsId +'_kinds"]:checked').val();
    }
    
    switch (weapon_kinds) {
        case "NORMAL":
            while (true) {
                let index = getRandomInt(filterList.length);
                let weaponId = filterList[index];
                weapon = WEAPON_LIST.find(w => {
                    return w.id == weaponId;
                });
                if(!selectedWeapon.includes(weapon)){
                    selectedWeapon.push(weapon);
                    break;
                }
            }
            break;
    
        case "AMMO":
            let index = getRandomInt(AMMO_TYPE_LIST.length);
            let ammo = AMMO_TYPE_LIST[index];
            selectedWeapon.push(ammo);
            break;

        case "FREE":
            selectedWeapon.push(FREE_WEAPON_OBJ1);
            break;
        default:
            break;
    }

}

/**
 * ランダム数値取得
 * @param {*} max 
 * @returns 
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
