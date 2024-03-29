import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Circle from 'react-native-vector-icons/Entypo';
import Location from 'react-native-vector-icons/Entypo';
import RightArrow from 'react-native-vector-icons/MaterialIcons';
import DotCircle from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {UserType} from './UserContext';
// import RazorpayCheckout from "react-native-razorpay";

const ConfirmationScreen = () => {
  const steps = [
    {title: 'Address', content: 'Address Form'},
    {title: 'Delivery', content: 'Delivery Options'},
    {title: 'Payment', content: 'Payment Details'},
    {title: 'Place Order', content: 'Order Summary'},
  ];
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(0);
  const [addresses, setAddresses] = useState([]);
  const {userId, setUserId} = useContext(UserType);
  const cart = useSelector((state: any) => state.cart.cart);
  const total = cart
    ?.map((item: any) => item.price * item.quantity)
    .reduce(({curr, prev}: any) => curr + prev, 0);
  useEffect(() => {
    fetchAddresses();
  }, []);
  const fetchAddresses = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/addresses/${userId}`,
      );
      const {addresses} = response.data;

      setAddresses(addresses);
    } catch (error) {
      console.log('error', error);
    }
  };
  const dispatch = useDispatch();
  const [selectedAddress, setSelectedAdress] = useState('');
  const [option, setOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  // const handlePlaceOrder = async () => {
  //   try {
  //     const orderData = {
  //       userId: userId,
  //       cartItems: cart,
  //       totalPrice: total,
  //       shippingAddress: selectedAddress,
  //       paymentMethod: selectedOption,
  //     };

  //     const response = await axios.post(
  //       "http://localhost:8000/orders",
  //       orderData
  //     );
  //     if (response.status === 200) {
  //       navigation.navigate("Order");
  //       dispatch(cleanCart());
  //       console.log("order created successfully", response.data);
  //     } else {
  //       console.log("error creating order", response.data);
  //     }
  //   } catch (error) {
  //     console.log("errror", error);
  //   }
  // };
  // const pay = async () => {
  //   try {
  //     const options = {
  //       description: "Adding To Wallet",
  //       currency: "INR",
  //       name: "Amazon",
  //       key: "rzp_test_E3GWYimxN7YMk8",
  //       amount: total * 100,
  //       prefill: {
  //         email: "void@razorpay.com",
  //         contact: "9191919191",
  //         name: "RazorPay Software",
  //       },
  //       theme: { color: "#F37254" },
  //     };

  //     const data = await RazorpayCheckout.open(options);

  //     console.log(data)

  //     const orderData = {
  //       userId: userId,
  //       cartItems: cart,
  //       totalPrice: total,
  //       shippingAddress: selectedAddress,
  //       paymentMethod: "card",
  //     };

  //     const response = await axios.post(
  //       "http://localhost:8000/orders",
  //       orderData
  //     );
  //     if (response.status === 200) {
  //       navigation.navigate("Order");
  //       dispatch(cleanCart());
  //       console.log("order created successfully", response.data);
  //     } else {
  //       console.log("error creating order", response.data);
  //     }
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
  return (
    <ScrollView style={{marginTop: Platform.OS == 'ios' ? 55 : 0}}>
      <View style={{flex: 1, paddingHorizontal: 20, paddingTop: 40}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
            justifyContent: 'space-between',
          }}>
          {steps?.map((step, index) => (
            <View
              style={{justifyContent: 'center', alignItems: 'center'}}
              key={index}>
              {index > 0 && (
                <View
                  style={[
                    {flex: 1, height: 2, backgroundColor: 'green'},
                    index <= currentStep && {backgroundColor: 'green'},
                  ]}
                />
              )}
              <View
                style={[
                  {
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: '#ccc',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  index < currentStep && {backgroundColor: 'green'},
                ]}>
                {index < currentStep ? (
                  <Text
                    style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
                    &#10003;
                  </Text>
                ) : (
                  <Text
                    style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
                    {index + 1}
                  </Text>
                )}
              </View>
              <Text style={{color: '#000', textAlign: 'center', marginTop: 8}}>
                {step.title}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {currentStep == 0 && (
        <View style={{marginHorizontal: 20}}>
          <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
            Select Delivery Address
          </Text>
        </View>
      )}

      {currentStep == 1 && (
        <View style={{marginHorizontal: 20}}>
          <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
            Choose your delivery options
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: 8,
              gap: 7,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
            }}>
            {option ? (
              <DotCircle name="dot-circle" size={20} color="#008397" />
            ) : (
              <Circle
                onPress={() => setOption(!option)}
                name="circle"
                size={20}
                color="gray"
              />
            )}

            <Text style={{color: '#000', flex: 1}}>
              <Text style={{color: 'green', fontWeight: '500'}}>
                Tomorrow by 10pm
              </Text>{' '}
              - FREE delivery with your Prime membership
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => setCurrentStep(2)}
            style={{
              backgroundColor: '#FFC72C',
              padding: 10,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}

      {currentStep == 2 && (
        <View style={{marginHorizontal: 20}}>
          <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
            Select your payment Method
          </Text>

          <View
            style={{
              backgroundColor: 'white',
              padding: 8,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 7,
              marginTop: 12,
            }}>
            {selectedOption === 'cash' ? (
              <DotCircle name="dot-circle" size={20} color="#008397" />
            ) : (
              <Circle
                onPress={() => setSelectedOption('cash')}
                name="circle"
                size={20}
                color="gray"
              />
            )}

            <Text style={{color: '#000'}}>Cash on Delivery</Text>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              padding: 8,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 7,
              marginTop: 12,
            }}>
            {selectedOption === 'card' ? (
              <DotCircle name="dot-circle" size={20} color="#008397" />
            ) : (
              <Circle
                onPress={() => {
                  setSelectedOption('card');
                  Alert.alert('UPI/Debit card', 'Pay Online', [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel is pressed'),
                    },
                    {
                      text: 'OK',
                      onPress: () => pay(),
                    },
                  ]);
                }}
                name="circle"
                size={20}
                color="gray"
              />
            )}

            <Text style={{color: '#000'}}>UPI / Credit or debit card</Text>
          </View>
          <TouchableOpacity
            onPress={() => setCurrentStep(3)}
            style={{
              backgroundColor: '#FFC72C',
              padding: 10,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}

      {currentStep === 3 && selectedOption === 'cash' && (
        <View style={{marginHorizontal: 20}}>
          <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
            Order Now
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 8,
              backgroundColor: 'white',
              padding: 8,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
            }}>
            <View>
              <Text style={{color: '#000', fontSize: 17, fontWeight: 'bold'}}>
                Save 5% and never run out
              </Text>
              <Text style={{fontSize: 15, color: 'gray', marginTop: 5}}>
                Turn on auto deliveries
              </Text>
            </View>

            <RightArrow name="keyboard-arrow-right" size={24} color="black" />
          </View>

          <View
            style={{
              backgroundColor: 'white',
              padding: 8,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
            }}>
            <Text>Shipping to Rushikesh Bhumkar</Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <Text style={{fontSize: 16, fontWeight: '500', color: 'gray'}}>
                Items
              </Text>

              <Text style={{color: 'gray', fontSize: 16}}>₹ 336</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <Text style={{fontSize: 16, fontWeight: '500', color: 'gray'}}>
                Delivery
              </Text>

              <Text style={{color: 'gray', fontSize: 16}}>₹0</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
                Order Total
              </Text>

              <Text
                style={{color: '#C60C30', fontSize: 17, fontWeight: 'bold'}}>
                ₹ 336
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              padding: 8,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
            }}>
            <Text style={{fontSize: 16, color: 'gray'}}>Pay With</Text>

            <Text
              style={{
                color: '#000',
                fontSize: 16,
                fontWeight: '600',
                marginTop: 7,
              }}>
              Pay on delivery (Cash)
            </Text>
          </View>

          <TouchableOpacity
            // onPress={handlePlaceOrder}
            style={{
              backgroundColor: '#FFC72C',
              padding: 10,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>
              Place your order
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 12,
          paddingHorizontal: 12,
          marginBottom: 20,
        }}>
        {currentStep !== 0 && (
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              borderRadius: 50,
              paddingHorizontal: 22,
              paddingVertical: 8,
            }}
            onPress={() =>
              currentStep == 0
                ? setCurrentStep(0)
                : setCurrentStep(currentStep - 1)
            }>
            <Text style={{fontWeight: 'bold', fontSize: 14, color: '#fff'}}>
              Prev
            </Text>
          </TouchableOpacity>
        )}
        {currentStep !== 4 && (
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              borderRadius: 50,
              paddingHorizontal: 22,
              paddingVertical: 8,
              position: 'absolute',
              right: 12,
            }}
            onPress={() => setCurrentStep(currentStep + 1)}>
            <Text style={{fontWeight: 'bold', fontSize: 14, color: '#fff'}}>
              Next
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({});
