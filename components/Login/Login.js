import React, { useState } from "react";
import { View, ScrollView, Image, Text, TextInput, ImageBackground, TextInputBase, Button, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import SignIn from "../SignIn/SignIn";
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';

const [isPasswordVisible, setIsPasswordVisible] = useState(false);
const navigation = useNavigation();
const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
};
const SignIn = () => {
    navigation.navigate(SignIn);
}
function LoginMobile() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            <View
                style={{
                    backgroundColor: "#ffffff",
                    paddingTop: 17,
                    paddingBottom: 8,
                }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 100,
                        marginHorizontal: 15,
                    }}>

                </View>
                <Image
                    source={require('../../assets/p-high-resolution-logo-transparent.png')}
                    resizeMode={"stretch"}
                    style={{
                        height: 100,
                        width: 140,
                        marginBottom: 20,
                        marginHorizontal: 120,
                    }}
                />
                <Text
                    style={{
                        color: "#667080",
                        fontSize: 24,
                        fontWeight: "bold",
                        marginBottom: 20,
                        marginHorizontal: 140,
                    }}>
                    {"Đăng nhập"}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#9f9e9a0D",
                        borderRadius: 16,
                        paddingVertical: 16,
                        paddingHorizontal: 20,
                        marginBottom: 20,
                        marginHorizontal: 20,
                    }}>
                    <Icon
                        name="email"
                        size={24}
                        color="#667080" // Đặt màu sắc tùy ý
                        style={{
                            marginRight: 11,
                        }}
                    />
                    <TextInput
                        inputMode="email"
                        style={{
                            color: "#667080",
                            fontSize: 16,
                            flex: 1,
                        }}
                        placeholder="Email">

                    </TextInput>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#9f9e9a0D",
                        borderRadius: 16,
                        paddingVertical: 16,
                        paddingHorizontal: 20,
                        marginBottom: 14,
                        marginHorizontal: 20,
                    }}>
                    <Icon
                        name="lock"

                        size={24}
                        color="#667080" // Đặt màu sắc tùy ý
                        style={{
                            marginRight: 11,
                        }}
                    />
                    <TextInput
                        secureTextEntry={!isPasswordVisible}
                        style={{
                            color: "#667080",
                            fontSize: 16,
                            flex: 1,
                        }}
                        placeholder="Mật khẩu">
                    </TextInput>
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Icon
                            name={isPasswordVisible ? 'visibility-off' : 'visibility'}

                            size={24}
                            color="#667080" // Đặt màu sắc tùy ý
                            style={{
                                marginRight: 11,
                            }}
                        />

                    </TouchableOpacity>

                </View>
                <TouchableOpacity
                    style={{
                        color: "#638285",
                        fontSize: 14,
                        marginBottom: 32,
                        marginHorizontal: 21,
                    }}>

                    <Text
                        style={{
                            color: "#638285",
                            fontSize: 14,
                        }}>
                        {"Quên mật khẩu?"}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        backgroundColor: "#667080",
                        borderRadius: 50,
                        paddingVertical: 21,
                        marginBottom: 24,
                        marginHorizontal: 20,
                    }}
                    onPress={() => {
                        // Xử lý sự kiện khi nút được nhấn
                    }}
                >
                    <Text style={{
                        color: "#ffffff",
                        fontSize: 16,
                    }}>Đăng nhập</Text>
                </TouchableOpacity>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 23,
                        marginHorizontal: 20,
                    }}>
                    <View
                        style={{
                            width: 109,
                            height: 1,
                            backgroundColor: "#9f9e9a1A",
                        }}>
                    </View>
                    <Text
                        style={{
                            color: "#0f1314",
                            fontSize: 14,
                        }}>
                        {"Đăng nhập bằng "}
                    </Text>
                    <View
                        style={{
                            width: 109,
                            height: 1,
                            backgroundColor: "#9f9e9a1A",
                        }}>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#9f9e9a0D",
                        borderRadius: 16,
                        paddingVertical: 16,
                        marginBottom: 10,
                        marginHorizontal: 20,
                    }}
                    onPress={() => {
                        // Xử lý sự kiện khi nút được nhấn
                    }}
                >
                    <Image
                        source={require('../../assets/vecteezy_google-search-icon-google-product-illustration_12871371_811.png')}
                        resizeMode={'stretch'}
                        style={{
                            width: 24,
                            height: 24,
                            marginRight: 11,
                        }}
                    />

                    <Text style={{
                        color: "#0f1314",
                        fontSize: 16,
                    }}>Đăng nhập bằng Google</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#9f9e9a0D",
                        borderRadius: 16,
                        paddingVertical: 16,
                        marginBottom: 10,
                        marginHorizontal: 20,
                    }}
                    onPress={() => {
                        // Xử lý sự kiện khi nút được nhấn
                    }}
                >
                    <Image
                        source={require('../../assets/vecteezy_facebook-logo-icon_21495960_159.png')}
                        resizeMode={'stretch'}
                        style={{
                            width: 24,
                            height: 24,
                            marginRight: 11,
                        }}
                    />

                    <Text style={{
                        color: "#0f1314",
                        fontSize: 16,
                    }}>Đăng nhập bằng Facebook</Text>
                </TouchableOpacity>

                <View style={{
                    marginBottom: 37,
                    flexDirection: "row",
                    marginHorizontal: 107,
                }}>
                    <Text
                        style={{
                            color: "#0f1314",
                            fontSize: 14,

                        }}>
                        {`Bạn chưa có tài khoản? `}
                    </Text>
                    <TouchableOpacity
                        style={{
                            color: "#667080",
                            fontSize: 14,
                        }}
                        onPress={SignIn}
                    >
                        <Text
                            style={{
                                color: "#667080",
                                fontSize: 14,

                            }}>
                            {`Đăng ký`}
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    );
}
function LoginWeb() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            <View
                style={{
                    backgroundColor: "#ffffff",
                    paddingTop: 17,
                    paddingBottom: 8,
                }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 100,
                        marginHorizontal: 15,
                    }}>

                </View>
                <Image
                    source={require('../../assets/p-high-resolution-logo-transparent.png')}
                    resizeMode={"stretch"}
                    style={{
                        height: 100,
                        width: 140,
                        marginBottom: 20,
                        marginHorizontal: 120,
                    }}
                />
                <Text
                    style={{
                        color: "#667080",
                        fontSize: 24,
                        fontWeight: "bold",
                        marginBottom: 20,
                        marginHorizontal: 140,
                    }}>
                    {"Đăng nhập"}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#9f9e9a0D",
                        borderRadius: 16,
                        paddingVertical: 16,
                        paddingHorizontal: 20,
                        marginBottom: 20,
                        marginHorizontal: 20,
                    }}>
                    <Icon
                        name="email"
                        size={24}
                        color="#667080" // Đặt màu sắc tùy ý
                        style={{
                            marginRight: 11,
                        }}
                    />
                    <TextInput
                        inputMode="email"
                        style={{
                            color: "#667080",
                            fontSize: 16,
                            flex: 1,
                        }}
                        placeholder="Email">

                    </TextInput>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#9f9e9a0D",
                        borderRadius: 16,
                        paddingVertical: 16,
                        paddingHorizontal: 20,
                        marginBottom: 14,
                        marginHorizontal: 20,
                    }}>
                    <Icon
                        name="lock"

                        size={24}
                        color="#667080" // Đặt màu sắc tùy ý
                        style={{
                            marginRight: 11,
                        }}
                    />
                    <TextInput
                        secureTextEntry={!isPasswordVisible}
                        style={{
                            color: "#667080",
                            fontSize: 16,
                            flex: 1,
                        }}
                        placeholder="Mật khẩu">
                    </TextInput>
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Icon
                            name={isPasswordVisible ? 'visibility-off' : 'visibility'}

                            size={24}
                            color="#667080" // Đặt màu sắc tùy ý
                            style={{
                                marginRight: 11,
                            }}
                        />

                    </TouchableOpacity>

                </View>
                <TouchableOpacity
                    style={{
                        color: "#638285",
                        fontSize: 14,
                        marginBottom: 32,
                        marginHorizontal: 21,
                    }}>

                    <Text
                        style={{
                            color: "#638285",
                            fontSize: 14,
                        }}>
                        {"Quên mật khẩu?"}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        backgroundColor: "#667080",
                        borderRadius: 50,
                        paddingVertical: 21,
                        marginBottom: 24,
                        marginHorizontal: 20,
                    }}
                    onPress={() => {
                        // Xử lý sự kiện khi nút được nhấn
                    }}
                >
                    <Text style={{
                        color: "#ffffff",
                        fontSize: 16,
                    }}>Đăng nhập</Text>
                </TouchableOpacity>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 23,
                        marginHorizontal: 20,
                    }}>
                    <View
                        style={{
                            width: 109,
                            height: 1,
                            backgroundColor: "#9f9e9a1A",
                        }}>
                    </View>
                    <Text
                        style={{
                            color: "#0f1314",
                            fontSize: 14,
                        }}>
                        {"Đăng nhập bằng "}
                    </Text>
                    <View
                        style={{
                            width: 109,
                            height: 1,
                            backgroundColor: "#9f9e9a1A",
                        }}>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#9f9e9a0D",
                        borderRadius: 16,
                        paddingVertical: 16,
                        marginBottom: 10,
                        marginHorizontal: 20,
                    }}
                    onPress={() => {
                        // Xử lý sự kiện khi nút được nhấn
                    }}
                >
                    <Image
                        source={require('../../assets/vecteezy_google-search-icon-google-product-illustration_12871371_811.png')}
                        resizeMode={'stretch'}
                        style={{
                            width: 24,
                            height: 24,
                            marginRight: 11,
                        }}
                    />

                    <Text style={{
                        color: "#0f1314",
                        fontSize: 16,
                    }}>Đăng nhập bằng Google</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#9f9e9a0D",
                        borderRadius: 16,
                        paddingVertical: 16,
                        marginBottom: 10,
                        marginHorizontal: 20,
                    }}
                    onPress={() => {
                        // Xử lý sự kiện khi nút được nhấn
                    }}
                >
                    <Image
                        source={require('../../assets/vecteezy_facebook-logo-icon_21495960_159.png')}
                        resizeMode={'stretch'}
                        style={{
                            width: 24,
                            height: 24,
                            marginRight: 11,
                        }}
                    />

                    <Text style={{
                        color: "#0f1314",
                        fontSize: 16,
                    }}>Đăng nhập bằng Facebook</Text>
                </TouchableOpacity>

                <View style={{
                    marginBottom: 37,
                    flexDirection: "row",
                    marginHorizontal: 107,
                }}>
                    <Text
                        style={{
                            color: "#0f1314",
                            fontSize: 14,

                        }}>
                        {`Bạn chưa có tài khoản? `}
                    </Text>
                    <TouchableOpacity
                        style={{
                            color: "#667080",
                            fontSize: 14,
                        }}
                        onPress={SignIn}
                    >
                        <Text
                            style={{
                                color: "#667080",
                                fontSize: 14,

                            }}>
                            {`Đăng ký`}
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    );
}

export default function Login() {
    return (
        <NavigationContainer>
            {Platform.OS === 'web' ? <LoginWeb /> : <LoginMobile />}
        </NavigationContainer>
    );
}