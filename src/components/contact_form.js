import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Text, Modal, View, Pressable, StyleSheet } from 'react-native';

export default function ContactForm() {
  const { control, register, handleSubmit, formState: { errors } } = useForm();
  const [data, setData] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const letterPattern = /^[A-Za-z]+$/;
  const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onSubmit = (data) => {
    setData(JSON.stringify(data));
    setModalVisible(!modalVisible);
  }

  return (
    <div style={{
      width: "80%",
      margin: "0 10%",
    }}>
      <div>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/* <p>{data}</p> */}
              
            {data && 
            <View>
              
          <Text>Username: {JSON.parse(data).userName}</Text>
          <Text>Emai: {JSON.parse(data).email}</Text>
          <Text>BirthDate: {JSON.parse(data).userBirthday}</Text>
            </View>
            }
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </div>
      <div>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <Text>Username</Text>
          {/* required: true, */}
          <input style={{ width: "100%" }} {...register("userName", { maxLength: 50, pattern: letterPattern })} placeholder="Username" />
          {errors.userName && <p>Please check the Username</p>}
          <Text>Email</Text>
          <input style={{ width: "100%" }}  {...register("email", { pattern: emailPattern })} placeholder="Email" />
          {errors.email && <p>Please check the Email</p>}

          <Text>Birth Date</Text>
          <Controller
            control={control}
            name='userBirthday'
            render={({ field }) => (
              <DatePicker
                placeholderText='User birthday'
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  centered: {
    width: "80%",
    margin: "0 10%",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
