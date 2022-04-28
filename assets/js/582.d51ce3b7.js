(window.webpackJsonp=window.webpackJsonp||[]).push([[582],{1004:function(e,t,a){"use strict";a.r(t);var n=a(36),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"creating-new-packets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-new-packets"}},[e._v("#")]),e._v(" Creating New Packets")]),e._v(" "),a("p",[e._v("Data sent between the client, editor, and server are sent as packets. Packets are defined in Intersect.Core/Networking/Packets.")]),e._v(" "),a("p",[e._v("Packets are stored in the Client/Editor/Server folders based on sender. For example the login packet sent from the client will be in the client folder.")]),e._v(" "),a("p",[e._v("Creating new packets are as simple as creating new classes in those folders that inherit from CerasPacket and then writing some sending and handling code.")]),e._v(" "),a("h2",{attrs:{id:"sending-packets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sending-packets"}},[e._v("#")]),e._v(" Sending Packets")]),e._v(" "),a("p",[e._v("The client, editor, and server each have a PacketSender class in the Networking folder.")]),e._v(" "),a("p",[e._v("In short you need to create an instance of your packet class, and then pass that to the relevant SendPacket function.")]),e._v(" "),a("h2",{attrs:{id:"handling-packets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handling-packets"}},[e._v("#")]),e._v(" Handling Packets")]),e._v(" "),a("p",[e._v("The client, editor, and server also each have a PacketHandler class in the Networking folder.")]),e._v(" "),a("p",[e._v("You will need to create a HandlePacket function that accepts the new packet class you created.")]),e._v(" "),a("p",[e._v("Once you've created a new packet class, written the code to send the packet, and written the handler you're done! Easy right?")])])}),[],!1,null,null,null);t.default=s.exports}}]);