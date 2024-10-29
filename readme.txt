=== Accept Bitcoin Payments via Apirone Gateway for WooCommerce ===
Contributors: apirone
Donate link: https://apirone.com
Tags: bitcoin, accept bitcoin, cryptocurrency, bitcoins, BTC, crypto, forwarding, payment, processing, acquiring, receive bitcoins, pay via cryptocurrency, crypto, bitcoin wallet
Requires PHP: 5.6
Requires at least: 4.0
Tested up to: 4.9.7
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Accept Bitcoins at your WordPress WooCommerce store. No account / KYC / registration necessary. Bitcoins only, no fiat money.

== Description ==

Use the Apirone plugin to receive payments in bitcoin from all around the world. We support Bitcoin SegWit protocol which has priority on the network and lower fees.


[youtube https://www.youtube.com/watch?v=RgQQBYfdcoQ]

Key features:

* We transfer your payment directly into your bitcoin wallet ( we do not hold client money)
* You do not need to complete a KYC/Documentation to start using our plugin. No third-party accounts during the process, use your own wallet.
* We will charge a fixed fee (0.0002 BTC/transaction) which does not depend on the amount of the order. * No fee for amounts less than 100,000 Satoshi.
* White label processing (your online store accepts payments without redirects, iframes, advertisements, logo, etc.)
* There is no restriction on the customer's country of residence. This plugins works well all over the world.
* We support the Tor network
* You can create unlimited number of requests. 


Example store: http://wordpress.bitcoinexamples.com

How does it work?

1. The Buyer prepares the order and click on the "pay with bitcoins" button.
1. The store sends its bitcoin address and the callback URL of its site to the Apirone API Server. He will receive immediately a new bitcoin address, a QR code and also the amount of the order converted into Bitcoin.
1. Then, the buyer scans the QR code and pays for the order. This transaction goes to blockchain

* Our server immediately intercepts it and sends a callback to the URL address provided by the store. This is only the first callback regarding this unconfirmed transaction. It is too early to deliver the order. We notify the store that a payment order has been initiated.
* Now we look forward to the confirmation on the network. Usually, it will take about ten minutes.
* After the first confirmation, our server transfers the bitcoin to the destination address provided by the store and makes a second callback. The buyer can now receive his products.
* The store completes the transaction.

The plugin work with our own RESTful API - Bitcoin Forwarding. For more details on how does it works, visit the Apirone website, in the section "How does it work" https://apirone.com/docs/how-it-works

Multilingual interface available in German, English, French and Russian.

Everyone can accept bitcoin payments!

== Installation ==

This Plugin requires Woocommerce. Please make sure you have Woocommerce installed.


Installation via WordPress Plugin Manager:

1. Go to WordPress Admin panel > Plugins > Add New in the admin panel.
1. Enter "Apirone Bitcoin Forwarding" in the search box.
1. Click Install Now.
1. Enter your bitcoin address to Apirone Plugin Settings: Admin > WooCommerce > Settings > Checkout tab > Apirone.
Turn "On" checkbox in Plugin on the same setting page.
Debug mode saving all responses, debugging messages, errors logs to "apirone-payment.log", but as a best practice do not enable this unless you are having issues with the plugin.
Order statuses created by default. Change it if needed.
"Minimum confirmations count" is a count of Bitcoin network confirmations. Recommend 3, default 2, minimum 1 conf.



== Frequently Asked Questions ==

= Can you support me directly with plugin? =

Yes. You can create ticket here. Email or chat via skype: support@apirone.com Also via our site: https://apirone.com

= I will get money in USD, EUR, CAD, JPY, RUR... =

No. You will get bitcoins only. Customer sends bitcoins and we forward it to your wallet.
You can enter bitcoin address of your account of any trading platform and convert bitcoins to fiat money at any time.

= What is Segwit? =

SegWit is the protocol of process by which blocks on a blockchain are made smaller by removing signature data from Bitcoin transactions. These transactions have high priority and less network fee.
You can use as destination address any bitcoin wallet starting with 1, 3 or bc1.

= How Store can cancel the order and return bitcoins? =

This process is fully manual because you will get all payments to your wallet. And only you control your money.
Contact with the Customer, ask address and finish the deal.
Bitcoin protocol has not refunds, chargebacks or transaction cancellations.

= Fee ? =

A fixed rate fee 0.0002 BTC per transaction, regardless of the amount and the number of transactions. Accept bitcoins for million dollars and pay the fixed fee.
We do not take the fee from amounts less than 100000 Satoshi.


== Screenshots ==
1. Add new plugin
2. Activate after installation from marketplace
3. Apirone bitcoin plugin settings page. Enter your bitcoin address and check other fields
4. The store checkout page with pre-calculated amount in Bitcoins
5. Partial payment of order. Example of other store template
6. Integrated payment details onto the WooCommerce page. Status of payment in real-time


== Changelog ==

= 2.0.2 =
Minor change of code. Float error fixed.

= 2.0.1 =
- Added pre-calculation of amount in Bitcoins.
- Added partial payment ability.
- Formated window for payment.
- Link to transaction(s).
- Status auto-update.
- Total improvement.

= 1.2.1 =
- Bitcoin logo fixed for any templates.

= 1.2 =
- Bitcoin logo update. Design improvement. Some descriptions updated.

= 1.1 =
- Updated exchange rates API. You can use any currency inlcude native bitcoin item price.

= 1.0 =
- Initial Revision. Use Bitcoin mainnet with SegWit support.
RestAPI v1.0 https://apirone.com/docs/bitcoin-forwarding-api