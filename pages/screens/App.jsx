import React from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../../abi/TwitterNft";
import DeployTweet from "../../components/molecules/DeployTweet";

const App = () => {
  // contract address is rinkeby's
  const provider = new ethers.providers.getDefaultProvider();
  console.log(provider);
  // const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, contractABI, provider);
  // contract interaction functions

  // end of contract interaction functions
  return (
    <>
      <DeployTweet />
    </>
  );
};

export default App;
