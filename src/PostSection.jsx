import React from "react";
import Post from "./Post";

const PostSection = () => {
  return (
    <div className='w-1/2 mx-4'>
      <div className='bg-white p-4 rounded-lg shadow-md mb-4'>
        <div className='flex items-center'>
          <img
            src='https://media.licdn.com/dms/image/v2/C5603AQEDhAJzTfYLvA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1650996874299?e=1732147200&v=beta&t=JhIIBiDWg3_pETmOauS3ST9sAQuuoS60whKmVyiL3SQ'
            alt='Profile'
            className='rounded-full mr-2 size-10'
          />
          <input
            type='text'
            placeholder='Search for Scholarly Literature (DOI)'
            className='w-full p-2 border rounded-full text-sm'
          />
        </div>
        <div className='flex items-center space-x-2 p-2 text-sm justify-center'>
          <i className='fas fa-filter text-blue-500'></i>
          <div className='flex space-x-2'>
            <button className='flex items-center px-1.5 py-1 border border-gray-300 rounded-md bg-white text-gray-700 text-sm'>
              Type <i className='fas fa-caret-down ml-1'></i>
            </button>
            <button className='flex items-center px-1.5 py-1 border border-gray-300 rounded-md bg-white text-gray-700 text-sm'>
              Time <i className='fas fa-caret-down ml-1'></i>
            </button>
            <button className='flex items-center px-1.5 py-1 border border-gray-300 rounded-md bg-white text-gray-700 text-sm'>
              Co-Authors <i className='fas fa-caret-down ml-1'></i>
            </button>
            <button className='flex items-center px-1.5 py-1 border border-gray-300 rounded-md bg-white text-gray-700 text-sm'>
              Publisher <i className='fas fa-caret-down ml-1'></i>
            </button>
            <button className='flex items-center px-1.5 py-1 border border-gray-300 rounded-md bg-white text-gray-700 text-sm'>
              Keywords <i className='fas fa-caret-down ml-1'></i>
            </button>
          </div>
        </div>
      </div>
      <Post
        profileImg='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAADoCAMAAABVRrFMAAAAh1BMVEX///8jHyAAAAAZFBVnZWYMAAWlpKQQCQsgHB2VlJQdGRq8u7tHREX8/PzY2NjNzMwoJCXe3t7s6+v39vcIAABOS0xBPj9cWlsUDhA7ODlUUVLv7++ioaG1tLR4d3eIh4cuKyzR0NCGhYVvbW5+fH3Ew8S4t7esq6s0MTKbmZqSkJFraWp0cnMrln4yAAAD3ElEQVR4nO3Ya3OqOhQG4LBSTUAUuSgR8Q6lXv7/7zsBrUSge8+ec8Tjnvf5UmbBtOudhlxgDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGrxXN/AsJ4pf3cJz5GTR6tVNPMNSSMsi/9VtPMGcD4i4HL+6j//cR0TF0ltQ0roziT9KZ53Zv14+yPQjy476WtfDjvq552Absvx0m40vtG7e8ohrqvxv+tXlA+HqR4J2XS3KZB11p99gBcVBTI5w/CGdWsksTU6rZFaTM6uStevzMplo1eW012ArWvuWklMpKc/p+PckW9HGI8eKct0IpZNGtI5kEdXmRrKBUf8ykgmjLnoM9kn2J0lLblnCdTTbf4zWTsZXo1peJxsUjfotmUiN+qi/YCmlq7IzYbPqJ512tPllMhE2fsUtGS0b9VuyF62Se7JHdPv74+vFJjdnyI5kzQTfyYJG/TvZ5NkhupxpndN9Ksh41UlaUHJfst8zWTCnZFK2xYkv1myTCKdqJc9o+z2E/mA0/pSs/9GYk9r6XOpcl3wmvlhC65h41YurvrfHHTOIN7mrmv5Oltf1iZEs+mzUny4jSROXWzzWwyufzvQWax+yWLfjLAIh6Rx2J7OMSXxmJDPrUyPZwyrRR7CELH4op0Mas2BKPGYX5dA2TPSIjI6psMT0h2Q1HpvJas7CTFaTvWyuPshS+3Je1O/HiJQ4sL3gES0vejyKTSEsNQjfMxmzyaFAr85yOwz90yzxPqaHlb+JdAN86Ug6/DQanTv1kKyu84dksq6rXpKxiSO+ltKxZESu/enl+ch2I1W+MJO1oPT6UDuZdO/mByOZM69vxEYyadTdfpKxcEaHQO+sdFeK1mOb1HXWL1akduynZKJ5PP1f7kEysie3fk+siK6dZDty712+50rNym1jcd2EiCNbVcn0kYaMk+/bJtPb4FUVbTBk1QayDHYx7r9vMr0TKTz9rkUjtiuXgL3/sNV/370+K3s/+uTwyzBTVvna/e7k6ZzsWjmD3pKpTV0+lfVbMpUZz9u9RstpH0wVF0rSymt+COlYz5S4I7dOZtYj80xt1Ae812T6XTuHCUk+2BWUNe6983cQ7UiL4KTiYE2t74FvnkwfrWkY+G7Hl1SPBlqkqmSDpttobNer0UhRsx71tL0yuFxExHlz2tNtp8OKvlzeLg1peYoL2/Vhoevjjvqw72As5PKFK89T6feJilc38Rybh63HX2X3+0cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODf+wfCO0e7jEoIkwAAAABJRU5ErkJggg=='
        name="ATTENTION-BASED IMAGE GENERATION NEURAL NETWORKS"
        role='Noam M Shazeer, Lukasz Mieczyslaw Kaiser, Jakob D Uszkoreit, Niki J Parmar, Ashish Teku Vaswani'
        time='2024/6/13'
        postContent="Methods, systems, and apparatus, including computer programs encoded on a computer storage medium, for generating an output image. In one aspect, one of the methods includes generating the output image intensity value by intensity value according to a generation order of pixel-color channel pairs from the output image, comprising, for each particular generation order position in the generation order: generating a current output image representation of a current output image, processing the current output image representation using a decoder neural network to generate a probability distribution over possible intensity values for the pixel-color channel pair at the particular generation order position, wherein the decoder neural network includes one or more local masked self-attention sub-layers; and selecting an intensity value for the pixel-color channel pair at the particular generation order position using the …"
        status='Synchronized'
      />
      <Post
        profileImg='data:image/png;base64,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'
        name='Attention-based sequence transduction neural networks'
        role='Noam M Shazeer, Aidan Nicholas Gomez, Lukasz Mieczyslaw Kaiser, Jakob D Uszkoreit, Llion Owen Jones, Niki J Parmar, Illia Polosukhin, Ashish Teku Vaswani'
        time='2024/5/2  '
        postContent='Model efficiency is a critical aspect of developing and deploying machine learning models. Inference time and latency directly affect the user experience, and some applications have hard requirements. In addition to inference costs, model training also have direct financial and environmental impacts. Although there are numerous well-established metrics (cost indicators) for measuring model efficiency, researchers and practitioners often assume that these metrics are correlated with each other and report only few of them..'
        status = "+ Add to Google Scholar"
      />
      <Post
        profileImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXxL-zCpCQr4jThL9mR6auBXS3-IKraiZ3VA&s'
        name='Multi-task multi-modal machine learning systems'
        role='Noam M Shazeer, Aidan Nicholas Gomez, Lukasz Mieczyslaw Kaiser, Jakob D Uszkoreit, Llion Owen Jones, Niki J Parmar, Ashish Teku Vaswani'
        time='2022/11/8'
        postContent='Methods, systems, and apparatus, including computer pro grams encoded on computer storage media, for processing images using a computer vision neural network that has one or more local self-attention layers. Each local self-attention layer is configured to apply or more local self-attention mechanisms to the layer input to the local self-attention layer....'
        status = "+ Add to DBLP"
      />
      <Post
        profileImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXxL-zCpCQr4jThL9mR6auBXS3-IKraiZ3VA&s'
        name='Local self-attention computer vision neural networks'
        role='Ashish Teku Vaswani, Prajit Ramachandran, Aravind Srinivas Lakshminarayanan, Blake Alan Hechtman, Niki J Parmar'
        time='2021/12/16'
        postContent='Methods, systems, and apparatus, including computer pro grams encoded on computer storage media, for processing images using a computer vision neural network that has one or more local self-attention layers. Each local self-attention layer is configured to apply or more local self-attention mechanisms to the layer input to the local self-attention layer....'
        status = "+ Add to DBLP"
      />
      
      <Post
        profileImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXxL-zCpCQr4jThL9mR6auBXS3-IKraiZ3VA&s'
        name='The efficiency misnomer'
        role='Mostafa Dehghani, Anurag Arnab, Lucas Beyer, Ashish Vaswani, Yi Tay'
        time='2021/10/25'
        postContent='Model efficiency is a critical aspect of developing and deploying machine learning models. Inference time and latency directly affect the user experience, and some applications have hard requirements. In addition to inference costs, model training also have direct financial and environmental impacts. Although there are numerous well-established metrics (cost indicators) for measuring model efficiency, researchers and practitioners often assume that these metrics are correlated with each other and report only few of them. In this paper, we thoroughly discuss common cost indicators, their advantages and disadvantages, and how they can contradict each other...'
        status = "+ Add to DBLP"
      />
      <Post
        profileImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXxL-zCpCQr4jThL9mR6auBXS3-IKraiZ3VA&s'
        name='Scale efficiently: Insights from pre-training and fine-tuning transformers'
        role='Yi Tay, Mostafa Dehghani, Jinfeng Rao, William Fedus, Samira Abnar, Hyung Won Chung, Sharan Narang, Dani Yogatama, Ashish Vaswani, Donald Metzler'
        time='2021/9/22'
        postContent='There remain many open questions pertaining to the scaling behaviour of Transformer architectures. These scaling decisions and findings can be critical, as training runs often come with an associated computational cost which have both financial and/or environmental impact. The goal of this paper is to present scaling insights from pretraining and finetuning Transformers. While Kaplan et al. presents a comprehensive study of the scaling behaviour of Transformer language models, the scope is only on the upstream (pretraining) loss. Therefore, it is still unclear if these set of findings transfer to downstream task within the context of the pretrain-finetune paradigm...'
        status = "+ Add to DBLP"
      />
      <Post
        profileImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXxL-zCpCQr4jThL9mR6auBXS3-IKraiZ3VA&s'
        name='Efficient content-based sparse attention with routing transformers'
        role='Aurko Roy, Mohammad Saffar, Ashish Vaswani, David Grangier'
        time='2021/2/1'
        postContent='Convolutional networks have enjoyed much success in many computer vision applications. The convolution operation however has a significant weakness in that it only operates on a local neighbourhood, thus missing global information. Self-attention, on the other hand, has emerged as a recent advance to capture long range interactions, but has mostly been applied to sequence modeling and generative modeling tasks. In this paper, we propose to augment convolutional networks with self-attention by concatenating convolutional feature maps with a set of feature maps produced via a novel relative self-attention mechanism....'
        status = "+ Add to DBLP"
      />
      <Post
      profileImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXxL-zCpCQr4jThL9mR6auBXS3-IKraiZ3VA&s'
      name='Bottleneck transformers for visual recognition'
      role='Aravind Srinivas, Tsung-Yi Lin, Niki Parmar, Jonathon Shlens, Pieter Abbeel, Ashish Vaswani'
      time='2021'
      postContent='We present BoTNet, a conceptually simple yet powerful backbone architecture that incorporates self-attention for multiple computer vision tasks including image classification, object detection and instance segmentation. By just replacing the spatial convolutions with global self-attention in the final three bottleneck blocks of a ResNet and no other changes, our approach improves upon the baselines significantly on instance segmentation and object detection while also reducing the parameters, with minimal overhead in latency...'
      status = "Synchronized"
    />
      <Post
        profileImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXxL-zCpCQr4jThL9mR6auBXS3-IKraiZ3VA&s'
        name='Multi-task multi-modal machine learning system'
        role='Noam M Shazeer, Aidan Nicholas Gomez, Lukasz Mieczyslaw Kaiser, Jakob D Uszkoreit, Llion Owen Jones, Niki J Parmar, Ashish Teku Vaswani'
        time='2020/9/29'
        postContent='Methods, systems, and apparatus, including computer programs encoded on computer storage media for training a machine learning model to perform multiple machine learning tasks from multiple machine learning domains. One system includes a machine learning model that includes multiple input modality neural networks corresponding to respective different modalities and being configured to map received data...'
        status = "+ Add to DBLP"
      />
    </div>
  );
};

export default PostSection;
