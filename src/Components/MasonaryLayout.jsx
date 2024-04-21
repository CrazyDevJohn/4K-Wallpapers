import MasonryList from "@react-native-seoul/masonry-list";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../../sanity";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { BlurView } from "expo-blur";

const MasonaryLayout = ({ screen, data }) => {
  return (
    <MasonryList
      data={data}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({ item }) => <CardItem data={item} screen={screen} />}
    />
  );
};

const CardItem = ({ data, screen }) => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate(screen, { param: data._id });
  };
  return (
    <TouchableOpacity
      style={{ height: Math.round(Math.random() * 100) + 200 }}
      className="bg-[#111] m-1 rounded-md relative overflow-hidden"
      onPress={handleClick}
    >
      <Image
        source={{ uri: urlFor(data.image).url() }}
        className="w-full h-full object-cover"
      />
      <View className="w-full absolute bottom-0">
        <View className="w-full h-full absolute bg-black opacity-40" />
        <View className="px-2 py-4 gap-1">
          <Text className="text-xs text-white tracking-wider font-bold">
            {data?.title}
          </Text>
          <Text className="text-xs text-white tracking-wider font-bold">
            {data?.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MasonaryLayout;
