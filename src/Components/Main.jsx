import React from "react";
import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Spacer,
  Button,
  Heading,
  Icon,
  Text,
  useToast,
  Show,
} from "@chakra-ui/react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useEffect, useState } from "react";

import axios from "axios";
const Main = () => {
  const [deposit, setDeposit] = useState("ACH");
  const [frequency, setFrequency] = useState("One Time");
  const [transaction, setTransaction] = useState("60-days-rollover");
  const [data, setData] = useState([]);
  const toast = useToast();

  const details = [
    {
      id: 1,
      date: "05/02/2022",
      accountNumber: "DB7856985412",
      accountName: "Demat",
      transactionType: "Deposit",
      netAmount: "$541.00",
      status: "Complete",
    },
    {
      id: 1,
      date: "05/02/2022",
      accountNumber: "DB7856985412",
      accountName: "Demat",
      transactionType: "Deposit",
      netAmount: "$541.00",
      status: "Complete",
    },
    {
      id: 1,
      date: "05/02/2022",
      accountNumber: "DB7856985412",
      accountName: "Demat",
      transactionType: "Journal",
      netAmount: "$541.00",
      status: "Complete",
    },
    {
      id: 1,
      date: "05/02/2022",
      accountNumber: "DB7856985412",
      accountName: "Demat",
      transactionType: "Withdraw",
      netAmount: "$541.00",
      status: "Upcoming",
    },
    {
      id: 1,
      date: "05/02/2022",
      accountNumber: "DB7856985412",
      accountName: "Demat",
      transactionType: "Journal",
      netAmount: "$541.00",
      status: "Complete",
    },
    // Add more details objects as needed
  ];
  useEffect(() => {
    fetchData();
  }, []);

  // This is function to fetch data from the JSON server
  const fetchData = async () => {
    try {
      const response = await axios.get("https://json-deployment2.onrender.com/users");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // This is function which will be called whenever we click on continue button
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create new data object for passing it to JSON server
    const newData = { deposit, frequency, transaction };

    try {
      // Posting the  data to JSON server
      await axios.post("https://json-deployment2.onrender.com/users", newData);
    
      // Here we are updating data state with the new data such that the old data is also persisting
      setData([...data, newData]);
      toast({
        title: "Success",
        description: "Data submitted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      fetchData()
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  const handleDelete = async (id) => {
    try {
      console.log(id);
      // Here we are deleting the data from JSON server using ID
      await axios.delete(`https://json-deployment2.onrender.com/users/${id}`);

      // Now we will fetch the updated data
      fetchData();

      // Show success toast message
      toast({
        title: "Success",
        description: "Data deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
        variant: "subtle",
      });
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  return (
    <Flex bg="#E5E4E2">
      {/* Here we are writing code inside the left column */}
      <Box flex={1} bg="#E5E4E2" p={4} height="100%">
        <Box bg="white" p={4} height="150vh">
          {/* Heading */}
          <Box
            border="1px solid #D3D3D3"
            p={4}
            bg="#FCFCFC"
            borderRadius="10px"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
              pb={2}
            >
              <h3 style={{ fontWeight: "bold" }}>Cash account</h3>

              <span style={{ color: "blue", cursor: "pointer" }}>Change</span>
            </Box>
            <Box display="flex" alignItems="center">
              <p style={{ marginRight: "0.5rem" }}>8541235895 - John A</p>
            </Box>
          </Box>

          {/* Now we will create a form*/}
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="deposit-type"
              style={{
                display: "block",
                textAlign: "left",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              Deposit type
            </label>
            <RadioGroup
              defaultValue="ACH"
              id="deposit-type"
              onChange={(value) => setDeposit(value)}
            >
              <Stack spacing={2} direction="row" mt="10px">
                <Radio value="ACH">ACH</Radio>
                <Radio value="Wire Transfer">Wire transfer</Radio>
                <Radio value="Account Transfer">Account Transfer</Radio>
              </Stack>
            </RadioGroup>

            {/* Bank */}
            <Box display="flex" alignItems="center" mt={4}>
              <label htmlFor="bank" style={{ marginRight: "0.5rem" }}>
                Bank
              </label>
              <Spacer />
              <p>Bank of America</p>
            </Box>

            {/* Line below Bank */}
            <Box mt={2}>
              <hr style={{ borderTop: "1px solid #D3D3D3" }} />
            </Box>

            {/* Credit To */}
            <Box display="flex" alignItems="center" mt={4}>
              <label htmlFor="credit-to" style={{ marginRight: "0.5rem" }}>
                Credit to
              </label>
              <Spacer />
              <p>Credit To</p>
            </Box>

            {/* Line below Credit To */}
            <Box mt={2}>
              <hr style={{ borderTop: "1px solid #D3D3D3" }} />
            </Box>

            {/* Benefit Of */}
            <Box display="flex" alignItems="center" mt={4}>
              <label htmlFor="benefit-of" style={{ marginRight: "0.5rem" }}>
                Benefit Of
              </label>
              <Spacer />
              <p>Benefit Of</p>
            </Box>

            {/* Line below Benefit Of */}
            <Box mt={2}>
              <hr style={{ borderTop: "1px solid #D3D3D3" }} />
            </Box>

            {/* Frequency */}
            <Box display="flex" alignItems="center" mt={4}>
              <label
                htmlFor="frequency"
                style={{ marginRight: "0.5rem", fontWeight: "bold" }}
              >
                Frequency
              </label>
            </Box>

            <select
              id="frequency"
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #D3D3D3",
              }}
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            >
              <option value="one-time">One Time</option>
              <option value="Weekly">Weekly</option>
              <option value="Every Other Week">Every Other Week</option>
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Annual">Annual</option>
            </select>

            {/* Transaction Type */}
            <Box
              display="flex"
              alignItems="flex-start"
              flexDirection="column"
              mt={4}
            >
              <label
                htmlFor="transaction-type"
                style={{ marginBottom: "0.5rem", alignSelf: "flex-start" }}
              >
                <b>Transaction Type</b>
              </label>
              <RadioGroup
                defaultValue="60-days-rollover"
                id="transaction-type"
                onChange={(value) => setTransaction(value)}
              >
                <Stack spacing={2} direction="row">
                  <Radio value="60-days-rollover">60-days rollover</Radio>
                </Stack>
              </RadioGroup>
            </Box>

            {/* Continue Button */}
            <Box display="flex" justifyContent="flex-start" mt={4}>
              <Button
                bg="#A41CA6"
                color="white"
                colorScheme="#A41CA6"
                variant="solid"
                type="submit"
                // onClick={() => window.location.reload()}
              >
                Continue
              </Button>
            </Box>
          </form>
          {/* Displaying Form Data */}
          <table
            style={{
              border: "1px solid black",
              borderCollapse: "collapse",
              width: "100%",
              marginTop: "5vh",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid gray",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  Deposit
                </th>
                <th
                  style={{
                    border: "1px solid gray",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  Frequency
                </th>
                <th
                  style={{
                    border: "1px solid gray",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  Transaction Type
                </th>
                <th
                  style={{
                    border: "1px solid gray",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td
                    style={{
                      border: "1px solid gray",
                      padding: "8px",
                      textAlign: "left",
                    }}
                  >
                    {item.deposit}
                  </td>
                  <td
                    style={{
                      border: "1px solid gray",
                      padding: "8px",
                      textAlign: "left",
                    }}
                  >
                    {item.frequency}
                  </td>
                  <td
                    style={{
                      border: "1px solid gray",
                      padding: "8px",
                      textAlign: "left",
                    }}
                  >
                    {item.transaction}
                  </td>
                  <td
                    onClick={() => handleDelete(item.id)}
                    style={{
                      border: "1px solid gray",
                      padding: "8px",
                      color: "red",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Box>

      {/* Right Column */}
      <Flex flex={1} direction="column">
        <Box bg="white" p={4} mb={4} height="50%" mt={5}>
          {/* Content for the top box in the right column */}
          <Box>
            <Heading as="h2" size="md" textAlign="left">
              Account Type
            </Heading>
          </Box>
          {/* Line below Account Type */}
          <Box mt={5}>
            <hr style={{ borderTop: "2px solid #D3D3D3" }} />
          </Box>
          {/* Cash */}
          <Box display="flex" alignItems="center" mt={4}>
            <label htmlFor="bank" style={{ marginRight: "0.5rem" }}>
              Cash
            </label>
            <Spacer />
            <p style={{ fontWeight: "bold", color: "green" }}>$521,148,28.69</p>
          </Box>

          {/* Line below Cash */}
          <Box mt={5}>
            <hr style={{ borderTop: "1px solid #D3D3D3" }} />
          </Box>
          {/* Margin */}
          <Box display="flex" alignItems="center" mt={4}>
            <label htmlFor="bank" style={{ marginRight: "0.5rem" }}>
              Margin
            </label>
            <Spacer />
            <p style={{ fontWeight: "bold", color: "green" }}>$120,963,74.14</p>
          </Box>

          {/* Line below Margin */}
          <Box mt={5}>
            <hr style={{ borderTop: "2px solid #D3D3D3" }} />
          </Box>
          {/* Retirement */}
          <Box display="flex" alignItems="center" mt={4}>
            <label htmlFor="bank" style={{ marginRight: "0.5rem" }}>
              Retirement
            </label>
            <Spacer />
            <p style={{ fontWeight: "bold", color: "green" }}>$120,963,74.14</p>
          </Box>

          {/* Line below Retirement */}
          <Box mt={5}>
            <hr style={{ borderTop: "2px solid #D3D3D3" }} />
          </Box>
          {/* Retirement */}
          <Box display="flex" alignItems="center" mt={4}>
            <label
              htmlFor="bank"
              style={{
                marginRight: "0.5rem",
                color: "blue",
                cursor: "pointer",
              }}
            >
              Go to Balance
            </label>
          </Box>
        </Box>
        <Box bg="white" p={4} height="50%">
          {/* Content for the bottom box in the right column */}
          <Box bg="white" p={4} height="50%">
            <Box bg="white" p={4} height="50%">
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid gray" }}>
                    <th
                      style={{
                        padding: "8px",
                        textAlign: "left",
                        borderRight: "1px solid gray",
                      }}
                    >
                      <Flex alignItems="center">
                        Date
                        {/* <Icon as={FaSort} ml={2} /> */}
                        <Icon as={FaArrowUp} ml={2} />
                        <Icon as={FaArrowDown} />
                      </Flex>
                    </th>

                    <th
                      style={{
                        padding: "8px",
                        textAlign: "left",
                        borderRight: "1px solid gray",
                      }}
                    >
                      <Flex alignItems="center">
                        Account Number
                        <Icon as={FaArrowUp} ml={2} />
                        <Icon as={FaArrowDown} />
                      </Flex>
                    </th>
                    <th
                      style={{
                        padding: "8px",
                        textAlign: "left",
                        borderRight: "1px solid gray",
                      }}
                    >
                      <Flex alignItems="center">
                        Account Name
                        <Icon as={FaArrowUp} ml={2} />
                        <Icon as={FaArrowDown} />
                      </Flex>
                    </th>
                    <th
                      style={{
                        padding: "8px",
                        textAlign: "left",
                        borderRight: "1px solid gray",
                      }}
                    >
                      <Flex alignItems="center">
                        Transaction Type
                        <Icon as={FaArrowUp} ml={2} />
                        <Icon as={FaArrowDown} />
                      </Flex>
                    </th>
                    <th
                      style={{
                        padding: "8px",
                        textAlign: "left",
                        borderRight: "1px solid gray",
                      }}
                    >
                      <Flex alignItems="center">
                        Net Amount
                        <Icon as={FaArrowUp} ml={2} />
                        <Icon as={FaArrowDown} />
                      </Flex>
                    </th>
                    <th
                      style={{
                        padding: "8px",
                        textAlign: "left",
                      }}
                    >
                      <Flex alignItems="center">
                        Status
                        <Icon as={FaArrowUp} ml={2} />
                        <Icon as={FaArrowDown} />
                      </Flex>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {details.map((item) => (
                    <tr key={item.id}>
                      <td
                        style={{
                          padding: "8px",
                          borderBottom: "1px solid gray",
                          borderRight: "1px solid gray",
                          textAlign: "left",
                        }}
                      >
                        {item.date}
                      </td>
                      <td
                        style={{
                          padding: "8px",
                          borderBottom: "1px solid gray",
                          borderRight: "1px solid gray",
                          textAlign: "left",
                        }}
                      >
                        {item.accountNumber}
                      </td>
                      <td
                        style={{
                          padding: "8px",
                          borderBottom: "1px solid gray",
                          borderRight: "1px solid gray",
                          textAlign: "left",
                        }}
                      >
                        {item.accountName}
                      </td>
                      <td
                        style={{
                          padding: "8px",
                          borderBottom: "1px solid gray",
                          borderRight: "1px solid gray",
                          textAlign: "left",
                        }}
                      >
                        {item.transactionType}
                      </td>
                      <td
                        style={{
                          padding: "8px",
                          borderBottom: "1px solid gray",
                          borderRight: "1px solid gray",
                          textAlign: "left",
                        }}
                      >
                        {item.netAmount}
                      </td>
                      <td
                        style={{
                          padding: "8px",
                          borderBottom: "1px solid gray",
                          textAlign: "left",
                        }}
                      >
                        {item.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Main;
