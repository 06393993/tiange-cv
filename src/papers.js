import React from 'react';
import learning_to_group_v1_image from './learningtogroup_v1.png';

export const papers = [{
    title: 'Learning to Group: A Bottom-Up Framework for 3D Part Discovery in Unseen Categories',
    topic: 'Learning with Limited Labeled Data',
    authors: ['Tiange Luo', 'Kaichun Mo', 'Zhiao Huang', 'Jiarui Xu', 'Siyu Hu', 'Liwei Wang', 'Hao Su'],
    from: 'ICLR 2020',
    paperLink: 'https://openreview.net/forum?id=rkl8dlHYvB',
    bibtex: `
@inproceedings{
      luo2020learning,
      title={Learning to Group: A Bottom-Up Framework for 3D Part Discovery in Unseen Categories},
      author={Tiange Luo and Kaichun Mo and Zhiao Huang and Jiarui Xu and Siyu Hu and Liwei Wang and Hao Su},
      booktitle={International Conference on Learning Representations},
      year={2020},
      url={https://openreview.net/forum?id=rkl8dlHYvB}
}
    `,
    otherLinks: [
        <a href="https://tiangeluo.github.io/pdfs/LearningToGroup.pdf">pdf</a>,
        <span>code release soon</span>
    ],
    img: learning_to_group_v1_image,
    selected: true,
    brief: `Modeling segmentation as a decision-making process, the framework
            is able to involve only part-level induction biases and takes a
            step towards universal shape segmentation.`,
}, {
    title: 'Few-Shot Learning with Global Class Representations',
    topic: 'Learning with Limited Labeled Data',
    authors: ['Tiange Luo*', 'Aoxue Li*', 'Tao Xiang', 'Weiran Huang', 'Liwei Wang'],
    from: 'ICCV 2019 ',
    paperLink: 'https://arxiv.org/abs/1908.05257',
    bibtex: `
@article{luo2019few,
      title={Few-Shot Learning with Global Class Representations},
      author={Luo, Tiange and Li, Aoxue and Xiang, Tao and Huang, Weiran and Wang, Liwei},
      journal={arXiv preprint arXiv:1908.05257},
      year={2019}
}
    `,
    otherLinks: [
        <a href="https://github.com/tiangeluo/fsl-global">code</a>,
        <a href="https://tiangeluo.github.io/GlobalRepresentation.html">project</a>
    ],
}, {
    title: 'Defective Convolutional Layers Learn Robust CNNs',
    topic: 'Representation Learning',
    authors: ['Tiange Luo*', 'Tianle Cai*', 'Mengxiao Zhang', 'Siyu Chen', 'Di He', 'Liwei Wang'],
    from: 'arXiv 2019',
    paperLink: 'https://arxiv.org/abs/1911.08432',
    bibtex: `
@article{luo2019defective,
      title={Defective Convolutional Layers Learn Robust CNNs},
      author={Luo, Tiange and Cai, Tianle and Zhang, Mengxiao and Chen, Siyu and He, Di and Wang, Liwei},
      journal={arXiv preprint arXiv:1911.08432},
      year={2019}
}
    `,
    otherLinks: [
        <a href="https://github.com/tiangeluo/DefectiveCNN">code</a>,
        <a href="https://tiangeluo.github.io/pdfs/RandomMask.pdf">older</a>
    ],
}, {
    title: 'Large-Scale Few-Shot Learning: Knowledge Transfer With Class Hierarchy',
    topic: 'Representation Learning',
    authors: ['Aoxue Li*', 'Tiange Luo*', 'Zhiwu Lu', 'Tao Xiang', 'Liwei Wang'],
    from: 'CVPR 2019',
    paperLink: 'http://openaccess.thecvf.com/content_CVPR_2019/papers/Li_Large-Scale_Few-Shot_Learning_Knowledge_Transfer_With_Class_Hierarchy_CVPR_2019_paper.pdf',
    bibtex: `
@inproceedings{li2019large,
      title={Large-Scale Few-Shot Learning: Knowledge Transfer With Class Hierarchy},
      author={Li, Aoxue and Luo, Tiange and Lu, Zhiwu and Xiang, Tao and Wang, Liwei},
      booktitle={Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition},
      pages={7212--7220},
      year={2019}
}
    `,
    otherLinks: [
        <a href="https://github.com/tiangeluo/fsl-hierarchy">code</a>,
    ],
}, {
    title: 'Learning to Navigate for Fine-grained Classification',
    topic: 'Miscellaneous Topic',
    authors: ['Ze Yang', 'Tiange Luo', 'Dong Wang', 'Zhiqiang Hu', 'Jun Gao', 'Liwei Wang'],
    from: 'ECCV 2018 ',
    paperLink: 'https://arxiv.org/abs/1809.00287',
    bibtex: `
@article{yang2018learning,
      title={Learning to Navigate for Fine-grained Classification},
      author={Yang, Ze and Luo, Tiange and Wang, Dong and Hu, Zhiqiang and Gao, Jun and Wang, Liwei},
      journal={arXiv preprint arXiv:1809.00287},
      year={2018}
}
    `,
    otherLinks: [
        <a href="https://github.com/yangze0930/NTS-Net">code</a>,
    ],
}];
