if(window.jQuery){function apirone_query(){jQuery(".abf-refresh").addClass("rotating");var e=function(e){var t,r,a=decodeURIComponent(window.location.search.substring(1)).split("&");for(r=0;r<a.length;r++)if((t=a[r].split("="))[0]===e)return void 0===t[1]||t[1]},t=e("key"),r=e("order");null!=t&&null!=r&&(abf_get_query="/?wc-api=check_payment&key="+t+"&order="+r,jQuery.ajax({url:abf_get_query,dataType:"text",success:function(a,e){"complete"==(a=JSON.parse(a)).status&&(complete=1,jQuery(".with-uncomfirmed, .uncomfirmed").empty(),statusText="Payment complete"),"innetwork"==a.status&&(innetwork=1,complete=0,jQuery(".with-uncomfirmed").text("(with uncomfirmed)"),statusText="Transaction in network (income amount: "+a.innetwork_amount+" BTC)"),"waiting"==a.status&&(complete=0,jQuery(".with-uncomfirmed, .uncomfirmed").empty(),statusText="Waiting payment"),jQuery(".abf-tx").empty(),a.transactions?a.transactions.forEach(function(e,t,r){e.confirmations>=a.count_confirmations?color="abf-green":0<e.confirmations&&e.confirmations<a.count_confirmations?color="abf-yellow":color="abf-red";tx='<div><a href="https://apirone.com/btc/tx/'+e.input_thash+'" target="_blank">'+e.input_thash.substr(0,8)+"..."+e.input_thash.substr(-8)+'</a><div class="abf-confirmations '+color+'" title="Confirmations count">'+e.confirmations+"</div></div>",jQuery(".abf-tx").prepend(tx)}):jQuery(".abf-tx").prepend("No TX yet"),input_address=jQuery(".abf-input-address").html(),encoded_msg=encodeURIComponent("bitcoin:"+input_address+"?amount="+a.remains_to_pay+"&label=Apirone"),src="https://apirone.com/api/v1/qr?message="+encoded_msg,jQuery(".abf-img-height").hide(),jQuery(".abf-img-height").attr("src",src),jQuery(".abf-img-height").show(),jQuery(".abf-totalbtc").text(a.total_btc),jQuery(".abf-arrived").text(a.arrived_amount),remains=parseFloat(a.remains_to_pay),remains=remains.toFixed(8),remains<0&&(remains=0),jQuery(".abf-remains").text(remains),jQuery(".abf-status").text(statusText),complete_block='<div class="abf-complete"><p>Thank You! Payment done. Order finished.</p></div>',!jQuery("div").is(".abf-complete")&&complete&&jQuery(".abf-data").after(complete_block),jQuery(".abf-refresh").removeClass("rotating")},error:function(e,t,r){jQuery(".apirone_result").html("<h4>Waiting for payment...</h4>")}}))}apirone_query(),setInterval(apirone_query,7e3),jQuery(document).ready(function(){jQuery(".abf-refresh").click(function(e){jQuery(".abf-refresh").addClass("rotating"),apirone_query()})})}