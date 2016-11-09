/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {

    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {

        // Events that fired from the index.html
        this.receivedEvent('lp_sdk_init');
        this.receivedEvent('start_lp_conversation');

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        console.log("In receivedEvent - ID: " + id);

        //Calling to the LP Messaging API using the bridge
        parentElement.addEventListener("click", function() {
            //Callbacks that call from the LPMessagingSDK.java
            var success = function(message) {
                console.log("OnEvent JS: " + message)
                alert(message);
            }

            var failure = function() {
                alert("Error calling lp_conversation_api Plugin");
            }

            console.log("In receivedEvent - doing sdk init : " + id);

            //Account id from the text field in the index.html
            var accountId = document.getElementById("accountId").value;

            //Calling to LPMessagingSDK class using the bridge
            lpMessagingSDK.lp_conversation_api(id, accountId, success, failure);
        });

        console.log('Received Event: ' + id);

    }
};

app.initialize();