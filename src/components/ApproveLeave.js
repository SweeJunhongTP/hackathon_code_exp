import { StyleSheet, Text, View,StatusBar,  } from 'react-native'
import React from 'react'
import Svg, { Ellipse } from "react-native-svg";


export default function  ApproveLeave(props) {
  return (
    <View style={styles.container}>

      <View style={styles.rect2Stack}>
        <View style={styles.rect2}>
          <View style={styles.rect3}>
            <View style={styles.pteEdisonLeeColumnRow}>
              <View style={styles.pteEdisonLeeColumn}>
                <Text style={styles.pteEdisonLee}>PTE Edison Lee</Text>
                <Text style={styles.plt2}>Plt 1 Sec 3</Text>
              </View>
              <View style={styles.rect4}>
                <Text style={styles.annual}>Annual</Text>
              </View>
            </View>
          </View>
          <View style={styles.textStackStack}>
            <View style={styles.textStack}>
              <Text style={styles.text}>
                Starting date: {"\n"}Duration: {"\n"}Overseas: {"\n"}Remarks:
              </Text>
              <Text style={styles.loremIpsum2}>
                2 Days (until 10 Jun 22){"\n"}Yes (Malaysia){"\n"}Visiting
                relatives
              </Text>
              <View style={styles.rect9}></View>
              <View style={styles.rect10}></View>
              <Text style={styles.loremIpsum15}>✔</Text>
              <Text style={styles.loremIpsum16}>✗</Text>
            </View>
            <Text style={styles.loremIpsum3}>09 June 22</Text>
          </View>
        </View>
        <Svg viewBox="0 0 0 52.12" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={0}
            cy={26}
            rx={0}
            ry={26}
          ></Ellipse>
        </Svg>
      </View>
      <View style={styles.rect5}>
        <View style={styles.rect6}>
          <View style={styles.pteJohnTanColumnRow}>
            <View style={styles.pteJohnTanColumn}>
              <Text style={styles.pteJohnTan}>PTE John Tan</Text>
              <Text style={styles.plt1Sec1}>Plt 1 Sec 1</Text>
            </View>
            <View style={styles.rect7}>
              <Text style={styles.medical}>Medical</Text>
            </View>
          </View>
        </View>
        <View style={styles.text2StackStack}>
          <View style={styles.text2Stack}>
            <Text style={styles.text2}>
              Starting date: {"\n"}Duration: {"\n"}Reason: {"\n"}Remarks:
            </Text>
            <Text style={styles.loremIpsum4}>
              3 Days (until 12 Jun 22){"\n"}High fever{"\n"}Nil
            </Text>
            <Text style={styles.loremIpsum10}>✔</Text>
            <Text style={styles.loremIpsum11}>✗</Text>
            <View style={styles.rect11}></View>
            <View style={styles.rect12}></View>
            <Text style={styles.loremIpsum17}>✗</Text>
            <Text style={styles.loremIpsum18}>✔</Text>
          </View>
          <Text style={styles.loremIpsum5}>10 June 22</Text>
          <View style={styles.rect8}>
            <Text style={styles.viewMc}>View MC</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(244,251,255,1)",
    borderWidth: 0,
    borderColor: "rgba(253,154,154,1)",
    alignContent: 'left',
    alignItems: 'left'
  },
  rect: {
    width: 361,
    height: 128,
    backgroundColor: "rgba(117,198,238,1)",
    borderRadius: 21,
    flexDirection: "row",
    marginTop: -33,
    marginLeft: -1,
    justifyContent: 'center',
    alignContent: 'left'
  },
  loremIpsum14: {
    fontFamily: "Arial-BoldMT",
    color: "rgba(253,252,252,1)",
    fontSize: 35,
    justifyContent: 'center',
    alignContent: 'left'
  },
  loremIpsum: {
    fontFamily: "Arial-BoldMT",
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    marginLeft: 16,
    marginTop: 14,
    justifyContent: 'center',
    alignContent: 'left'
  },
  loremIpsum14Row: {
    height: 46,
    flexDirection: "row",
    flex: 1,
    marginRight: 54,
    marginLeft: 19,
    marginTop: 58,
    justifyContent: 'center',
    alignContent: 'left'
  },
  rect2: {
    top: 0,
    left: 0,
    width: 288,
    height: 200,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.99)",
    borderWidth: 5,
    borderColor: "rgba(253,154,154,0.99)",
    borderRadius: 19,
    justifyContent: 'top',
    alignContent: 'left'
  },
  rect3: {
    width: 288,
    height: 63,
    backgroundColor: "rgba(253,154,154,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 12,
    justifyContent: 'top',
    alignContent: 'left'
  },
  pteEdisonLee: {
    fontFamily: "Arial-BoldMT",
    color: "rgba(255,255,255,1)",
    letterSpacing: 0,
    fontSize: 20,
    marginLeft: 1
  },
  plt2: {
    fontFamily: "ArialMT",
    color: "rgba(255,255,255,1)",
    fontSize: 12
  },
  pteEdisonLeeColumn: {
    width: 146
  },
  rect4: {
    width: 41,
    height: 11,
    backgroundColor: "rgba(253,251,251,1)",
    borderRadius: 8,
    borderWidth: 0,
    borderColor: "#000000",
    marginLeft: 65,
    marginTop: 14
  },
  annual: {
    fontFamily: "Arial-BoldMT",
    color: "rgba(253,154,154,1)",
    fontSize: 8,
    marginTop: 1,
    marginLeft: 8
  },
  pteEdisonLeeColumnRow: {
    height: 37,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 21,
    marginRight: 15
  },
  text: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "Arial-BoldMT",
    color: "#121212",
    lineHeight: 20
  },
  loremIpsum2: {
    top: 20,
    left: 65,
    position: "absolute",
    fontFamily: "ArialMT",
    color: "#121212",
    height: 82,
    width: 174,
    lineHeight: 20
  },
  rect9: {
    top: 82,
    left: 163,
    width: 32,
    height: 32,
    position: "absolute",
    backgroundColor: "rgba(126,211,33,1)",
    borderRadius: 100
  },
  rect10: {
    top: 82,
    left: 214,
    width: 32,
    height: 32,
    position: "absolute",
    backgroundColor: "rgba(208,2,27,1)",
    borderRadius: 100
  },
  loremIpsum15: {
    top: 77,
    left: 166,
    position: "absolute",
    fontFamily: "ArialMT",
    color: "rgba(255,254,254,1)",
    fontSize: 30
  },
  loremIpsum16: {
    top: 80,
    left: 220,
    position: "absolute",
    fontFamily: "Arial-BoldMT",
    color: "rgba(255,252,252,1)",
    fontSize: 25
  },
  textStack: {
    top: 0,
    left: 0,
    width: 246,
    height: 117,
    position: "absolute"
  },
  loremIpsum3: {
    top: 2,
    left: 89,
    position: "absolute",
    fontFamily: "ArialMT",
    color: "#121212",
    height: 17,
    width: 96
  },
  textStackStack: {
    width: 246,
    height: 117,
    marginTop: 11,
    marginLeft: 22
  },
  ellipse: {
    top: 182,
    left: 186,
    width: 0,
    height: 52,
    position: "absolute"
  },
  rect2Stack: {
    width: 288,
    height: 234,
    marginTop: 42,
    marginLeft: 36
  },
  rect5: {
    width: 288,
    height: 200,
    backgroundColor: "rgba(255,255,255,0.99)",
    borderWidth: 5,
    borderColor: "rgba(107,177,82,0.99)",
    borderRadius: 19,
    marginTop: 8,
    marginLeft: 36
  },
  rect6: {
    width: 288,
    height: 63,
    backgroundColor: "rgba(107,177,82,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 12
  },
  pteJohnTan: {
    fontFamily: "Arial-BoldMT",
    color: "rgba(255,255,255,1)",
    letterSpacing: 0,
    fontSize: 20
  },
  plt1Sec1: {
    fontFamily: "ArialMT",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    marginTop: 1
  },
  pteJohnTanColumn: {
    width: 125
  },
  rect7: {
    width: 41,
    height: 11,
    backgroundColor: "rgba(253,251,251,1)",
    borderRadius: 8,
    borderWidth: 0,
    borderColor: "#000000",
    marginLeft: 85,
    marginTop: 14
  },
  medical: {
    fontFamily: "Arial-BoldMT",
    color: "rgba(107,177,82,1)",
    fontSize: 8,
    marginTop: 1,
    marginLeft: 7
  },
  pteJohnTanColumnRow: {
    height: 38,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 22,
    marginRight: 15
  },
  text2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "Arial-BoldMT",
    color: "#121212",
    lineHeight: 20
  },
  loremIpsum4: {
    top: 21,
    left: 65,
    position: "absolute",
    fontFamily: "ArialMT",
    color: "#121212",
    height: 82,
    width: 174,
    lineHeight: 20
  },
  loremIpsum10: {
    top: 77,
    left: 174,
    position: "absolute",
    fontFamily: "ArialMT",
    color: "rgba(255,254,254,1)",
    fontSize: 30
  },
  loremIpsum11: {
    top: 80,
    left: 224,
    position: "absolute",
    fontFamily: "Arial-BoldMT",
    color: "rgba(255,252,252,1)",
    fontSize: 25
  },
  rect11: {
    top: 83,
    left: 163,
    width: 32,
    height: 32,
    position: "absolute",
    backgroundColor: "rgba(126,211,33,1)",
    borderRadius: 100
  },
  rect12: {
    top: 83,
    left: 214,
    width: 32,
    height: 32,
    position: "absolute",
    backgroundColor: "rgba(208,2,27,1)",
    borderRadius: 100
  },
  loremIpsum17: {
    top: 81,
    left: 220,
    position: "absolute",
    fontFamily: "Arial-BoldMT",
    color: "rgba(255,252,252,1)",
    fontSize: 25
  },
  loremIpsum18: {
    top: 78,
    left: 166,
    position: "absolute",
    fontFamily: "ArialMT",
    color: "rgba(255,254,254,1)",
    fontSize: 30
  },
  text2Stack: {
    top: 0,
    left: 0,
    width: 246,
    height: 118,
    position: "absolute"
  },
  loremIpsum5: {
    top: 2,
    left: 87,
    position: "absolute",
    fontFamily: "ArialMT",
    color: "#121212",
    height: 17,
    width: 96
  },
  rect8: {
    top: 91,
    left: 1,
    width: 54,
    height: 20,
    position: "absolute",
    backgroundColor: "rgba(107,177,82,1)",
    borderRadius: 8,
    borderWidth: 0,
    borderColor: "#000000"
  },
  viewMc: {
    fontFamily: "Arial-BoldMT",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    marginTop: 4,
    marginLeft: 4
  },
  text2StackStack: {
    width: 246,
    height: 118,
    marginTop: 11,
    marginLeft: 22
  }
});



