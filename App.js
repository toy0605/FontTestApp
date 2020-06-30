import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';

const Styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  fontSelector: {
    flexDirection: 'row',
  },
  fontSelectorButton: {
    marginHorizontal: 15,
    paddingVertical: 15,
  },
  innerView: {
    padding: 10
  },
  commonFont: {
    margin: 0,
    fontSize: 12,
    lineHeight: 28,
  },
});

const App = () => {
  const [visibleTextMetrics, setVisibleTextMetrics] = React.useState(false);
  const [textMetricsEN, setTextMetricsEN] = React.useState([]);
  const [textMetricsKR, setTextMetricsKR] = React.useState([]);
  const [font, setFont] = React.useState(undefined);
  return (
    <SafeAreaView style={Styles.appContainer}>
      <ScrollView contentContainerStyle={Styles.fontSelector} horizontal>
        <TouchableOpacity
          style={Styles.fontSelectorButton}
          onPress={() => setFont(undefined)}>
          <Text>undefined(Default),</Text>
        </TouchableOpacity>
        {Platform.OS === 'ios' ? (
          <>
            <TouchableOpacity
              style={Styles.fontSelectorButton}
              onPress={() => setFont('AppleSDGothicNeo-Regular')}>
              <Text>AppleSDGothicNeo</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={Styles.fontSelectorButton}
              onPress={() => setFont('sans-serif')}>
              <Text>sans-serif</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.fontSelectorButton}
              onPress={() => setFont('serif')}>
              <Text>serif</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.fontSelectorButton}
              onPress={() => setFont('monospace')}>
              <Text>monospace</Text>
            </TouchableOpacity>
          </>
        )}
        <TouchableOpacity
          style={Styles.fontSelectorButton}
          onPress={() => setFont('NotoSansKR-Regular')}>
          <Text>NotoSansKR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.fontSelectorButton}
          onPress={() => setFont('NotoSansCJKkr-Regular')}>
          <Text>NotoSansCJKkr</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.fontSelectorButton}
          onPress={() => setFont('NotoSerifCJKkr-Regular')}>
          <Text>NotoSerifCJKkr</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.fontSelectorButton}
          onPress={() => setFont('NotoSerifKR-Regular')}>
          <Text>NotoSerifKR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.fontSelectorButton}
          onPress={() => setFont('NotoSansMonoCJKkr-Regular')}>
          <Text>NotoSansMonoCJKkr</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.fontSelectorButton}
          onPress={() =>
            setFont(Platform.OS === 'ios' ? 'NanumGothicOTF' : 'NanumGothic')
          }>
          <Text>NanumGothic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.fontSelectorButton}
          onPress={() =>
            setFont(
              Platform.OS === 'ios'
                ? 'NanumBarunGothicOTF'
                : 'NanumBarunGothic',
            )
          }>
          <Text>NanumBarunGothic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.fontSelectorButton}
          onPress={() =>
            setVisibleTextMetrics(visibleTextMetrics ? false : true)
          }>
          <Text>TEXT METRICS VIEW</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView contentContainerStyle={Styles.innerView}>
        <Text>{font}</Text>
        <View>
          {visibleTextMetrics &&
            textMetricsEN.map(
              ({
                x,
                y,
                width,
                height,
                capHeight,
                ascender,
                descender,
                xHeight,
              }) => {
                return [
                  <View
                    key="baseline view"
                    style={{
                      top: y + ascender,
                      height: 1,
                      left: 0,
                      right: 0,
                      position: 'absolute',
                      backgroundColor: 'red',
                    }}
                  />,
                  <View
                    key="capheight view"
                    style={{
                      top: y + ascender - capHeight,
                      height: 1,
                      left: 0,
                      right: 0,
                      position: 'absolute',
                      backgroundColor: 'green',
                    }}
                  />,
                  <View
                    key="xheight view"
                    style={{
                      top: y + ascender - xHeight,
                      height: 1,
                      left: 0,
                      right: 0,
                      position: 'absolute',
                      backgroundColor: 'blue',
                    }}
                  />,
                  <View
                    key="descender view"
                    style={{
                      top: y + ascender + descender,
                      height: 1,
                      left: 0,
                      right: 0,
                      position: 'absolute',
                      backgroundColor: 'orange',
                    }}
                  />,
                  <View
                    key="end of text view"
                    style={{
                      top: y,
                      height: height,
                      width: 1,
                      left: x + width,
                      position: 'absolute',
                      backgroundColor: 'brown',
                    }}
                  />,
                  <View
                    key="start of text view"
                    style={{
                      top: y,
                      height: height,
                      width: 1,
                      left: x,
                      position: 'absolute',
                      backgroundColor: 'brown',
                    }}
                  />,
                ];
              },
            )}
          <Text
            style={[Styles.commonFont, {fontFamily: font}]}
            onTextLayout={event => setTextMetricsEN(event.nativeEvent.lines)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
        <View>
          {visibleTextMetrics &&
            textMetricsKR.map(
              ({
                x,
                y,
                width,
                height,
                capHeight,
                ascender,
                descender,
                xHeight,
              }) => {
                return [
                  <View
                    key="baseline view"
                    style={{
                      top: y + ascender,
                      height: 1,
                      left: 0,
                      right: 0,
                      position: 'absolute',
                      backgroundColor: 'red',
                    }}
                  />,
                  <View
                    key="capheight view"
                    style={{
                      top: y + ascender - capHeight,
                      height: 1,
                      left: 0,
                      right: 0,
                      position: 'absolute',
                      backgroundColor: 'green',
                    }}
                  />,
                  <View
                    key="xheight view"
                    style={{
                      top: y + ascender - xHeight,
                      height: 1,
                      left: 0,
                      right: 0,
                      position: 'absolute',
                      backgroundColor: 'blue',
                    }}
                  />,
                  <View
                    key="descender view"
                    style={{
                      top: y + ascender + descender,
                      height: 1,
                      left: 0,
                      right: 0,
                      position: 'absolute',
                      backgroundColor: 'orange',
                    }}
                  />,
                  <View
                    key="end of text view"
                    style={{
                      top: y,
                      height: height,
                      width: 1,
                      left: x + width,
                      position: 'absolute',
                      backgroundColor: 'brown',
                    }}
                  />,
                  <View
                    key="start of text view"
                    style={{
                      top: y,
                      height: height,
                      width: 1,
                      left: x,
                      position: 'absolute',
                      backgroundColor: 'brown',
                    }}
                  />,
                ];
              },
            )}
          <Text
            style={[Styles.commonFont, {fontFamily: font}]}
            onTextLayout={event => setTextMetricsKR(event.nativeEvent.lines)}>
            그들의 하였으며, 있는 청춘 있음으로써 위하여 아니다. 역사를 청춘의
            노년에게서 없으면, 이것이다. 풀이 하는 인간은 너의 말이다. 위하여,
            두기 못할 투명하되 얼마나 넣는 그러므로 것이다. 인간의 유소년에게서
            하는 모래뿐일 찬미를 그러므로 보라. 찾아 웅대한 그림자는 바로 인생을
            인간은 목숨이 위하여서. 주는 열락의 피어나기 가슴이 부패뿐이다.
            힘차게 주는 있는 그들의 거선의 이것은 청춘의 것은 인도하겠다는
            약동하다. 속에 천지는 이상을 피다. 유소년에게서 굳세게 뛰노는 지혜는
            있는 청춘의 것이다.보라, 창공에 것이다. 청춘 더운지라 든 하여도
            방황하였으며, 말이다.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
